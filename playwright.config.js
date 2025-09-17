// @ts-check
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  outputDir: './reports',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: 1, // Run with 1 worker to avoid session conflicts
  reporter: [
    ['html', { outputFolder: 'playwright-report' }],
    ['json', { outputFolder: 'test-results' }],
    ['list']
  ],
  use: {
    baseURL: 'http://tgn-frontend-staging-375478166582-us-east-1.s3-website-us-east-1.amazonaws.com',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    headless: false, // Run in headed mode
  },
  projects: [
    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'],
      },
    },
  ],
  webServer: {
    command: 'npm run start',
    url: 'http://tgn-frontend-staging-375478166582-us-east-1.s3-website-us-east-1.amazonaws.com',
    reuseExistingServer: !process.env.CI,
  },
});
