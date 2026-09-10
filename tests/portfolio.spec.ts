import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('visitors can reach the work and a useful contact route immediately', async ({
  page,
}) => {
  await page.goto('/');
  await expect(page.locator('main')).toBeVisible();
  await expect(page.locator('.hero img')).toBeVisible();
  await page.locator('.hero-links a[href="#works"]').click();
  await expect(page.locator('#works')).toBeInViewport();
  await page.locator('header a[href="#contact"]').click();
  await expect(page.locator('#contact')).toBeInViewport();
  const mail = await page
    .locator('#contact a[href^="mailto:"]')
    .first()
    .getAttribute('href');
  expect(decodeURIComponent(mail!)).toContain('希望納期');
});

test('gallery is operable with a keyboard and announces its position', async ({
  page,
}) => {
  await page.goto('/');
  const next = page.getByRole('button', { name: '次の画像', exact: true });
  await next.focus();
  await page.keyboard.press('Enter');
  await expect(page.locator('#gallery-status')).toHaveText('02 / 04');
  await page.getByRole('button', { name: '前の画像', exact: true }).click();
  await expect(page.locator('#gallery-status')).toHaveText('01 / 04');
});

test('English remains usable after reload and with storage unavailable', async ({
  page,
}) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'English', exact: true }).click();
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await expect(page.locator('#contact h2')).toContainText('next');
  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await page.addInitScript(() => {
    Storage.prototype.getItem = () => {
      throw new Error('Storage blocked');
    };
  });
  await page.reload();
  await page.getByRole('button', { name: 'English', exact: true }).click();
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
});

test('mobile navigation, images and layout remain usable', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.goto('/');
  await expect(page.locator('#mobile-menu')).toBeHidden();
  await page.getByRole('button', { name: 'メニューを開く' }).click();
  await expect(page.locator('#mobile-menu')).toBeVisible();
  await page.locator('#mobile-menu a[href="#works"]').click();
  await expect(page.locator('#mobile-menu')).toBeHidden();
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
  await page.locator('#contact').scrollIntoViewIfNeeded();
  expect(errors).toEqual([]);
});

test('page meets automated WCAG AA checks', async ({ page }) => {
  await page.goto('/');
  const result = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
    .analyze();
  expect(result.violations).toEqual([]);
});

test('work and contact remain available without JavaScript', async ({
  browser,
}) => {
  const page = await browser.newPage({ javaScriptEnabled: false });
  await page.goto('/');
  await expect(page.locator('#works')).toBeVisible();
  await expect(
    page.locator('#contact a[href^="mailto:"]').first(),
  ).toBeVisible();
  await expect(page.locator('main h1')).toBeVisible();
  await page.close();
});

test('AI experience is discoverable and keeps audience figures approximate', async ({
  page,
}) => {
  await page.goto('/');
  await page.locator('.desktop-nav a[href="#lab"]').click();
  await expect(page.locator('#lab')).toBeInViewport();
  await expect(page.locator('.creator-metrics')).toContainText('≈20K');
  await expect(page.locator('.creator-operations')).not.toContainText(
    '2万人弱',
  );
  await expect(
    page.locator('.creator-operations img, .creator-operations a'),
  ).toHaveCount(0);
});

test('email copy confirms success and offers a usable fallback', async ({
  page,
  context,
}) => {
  await context.grantPermissions(['clipboard-read', 'clipboard-write']);
  await page.goto('/');
  await page.locator('#copy-email').click();
  await expect(page.locator('#copy-status')).toHaveText('コピーしました');
  expect(await page.evaluate(() => navigator.clipboard.readText())).toBe(
    'kojo@akinechan.com',
  );
  await page.evaluate(() => {
    navigator.clipboard.writeText = async () => {
      throw new Error('Permission denied');
    };
  });
  await page.locator('#copy-email').click();
  await expect(page.locator('#copy-status')).toContainText('選択してコピー');
});

test('gallery keeps a consistent frame for differently sized source images', async ({
  page,
}) => {
  await page.goto('/');
  const frame = page.locator('.gallery-track');
  await frame.scrollIntoViewIfNeeded();
  const box = await frame.boundingBox();
  expect(box).not.toBeNull();
  expect(Math.abs(box!.height - box!.width / 2.25)).toBeLessThan(2);
  await page.getByRole('button', { name: '次の画像', exact: true }).click();
  const nextBox = await frame.boundingBox();
  expect(nextBox!.height).toBe(box!.height);
});
