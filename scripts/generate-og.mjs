// Capture the implemented design as a social preview. Run against the local dev server.
import { chromium } from '@playwright/test';
const browser = await chromium.launch({ channel: 'chrome' });
try {
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
  await page.goto('http://127.0.0.1:4321');
  await page.addStyleTag({ content: `
    .site-header, .skip-link, .hero ~ *, .site-footer, .proof-strip, .hero-links, .hero-description { display: none !important; }
    .hero { width: 1100px; padding-top: 26px; }
    .hero-topline { margin-bottom: 35px; }
    .hero-grid { grid-template-columns: .85fr 1.15fr; gap: 40px; }
    .hero h1 { font-size: 116px; }
    .hero-copy > .eyebrow { margin-bottom: 20px; }
    .hero-promise { font-size: 26px; }
    .feature-image { height: 390px; }
    .feature-caption h2 { font-size: 21px; }
    .feature-sticker { top: -14px; }
    .japanese-name { margin: 25px 0; }
    .availability { font-size: 12px; }
  ` });
  await page.evaluate(async () => {
    await document.fonts.ready;
    await document.querySelector('.hero img').decode();
  });
  await page.screenshot({ path: 'public/og-image.jpg', type: 'jpeg', quality: 90 });
} finally { await browser.close(); }
