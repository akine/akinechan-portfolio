import { defineConfig } from '@playwright/test';
const target = process.env.PORTFOLIO_TEST_URL;
export default defineConfig({
  testDir: './tests',
  use: { baseURL: target || 'http://127.0.0.1:4321', channel: 'chrome' },
  webServer: target
    ? undefined
    : {
        command: 'npm run dev -- --host 127.0.0.1',
        url: 'http://127.0.0.1:4321',
        reuseExistingServer: !process.env.CI,
      },
});
