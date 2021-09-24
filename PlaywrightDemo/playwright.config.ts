//playwright.config.ts
import { PlaywrightTestConfig } from '@playwright/test';
const config: PlaywrightTestConfig = {
    use: {
        headless: false,
        video: 'on'
    },
    reporter: 'experimental-allure-playwright',
    retries: 1,


};
export default config;