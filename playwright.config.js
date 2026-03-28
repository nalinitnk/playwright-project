import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  timeout: 30000,

  use: {
    headless: false, // opens browser UI
    viewport: { width: 1280, height: 720 },
    actionTimeout: 0,
      screenshot: 'on',
    video: 'on',
    trace: 'on'
  },
  reporter: [
    ['list'], // Shows test progress in the Jenkins console
    ['html', { outputFolder: 'playwright-report', open: 'never' }] // Generates the folder
  ],

  projects: [
    {
      name: 'chrome',
      use: {
        ...devices['Desktop Chrome'],
    },
    },
    
  ],
});      
