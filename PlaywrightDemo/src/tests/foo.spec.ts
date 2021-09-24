import { test, expect } from '@playwright/test';

test('Playwright test', async ({ page }) => {
  await test.step('Step1 : Navigate to Playwright.dev', async () => {
    await page.goto('https://playwright.dev/');
  });

  await test.step('Step2 : Check if title text contains "Playwright"', async () => {
    const title = page.locator('.navbar__inner .navbar__title');
    await expect(title).toHaveText('Playwright');
    await page.screenshot({ path: 'Playwright.png', fullPage: true })
  });


});


test('Google Page Test', async ({ page }) => {

  await test.step('Step1 : Navigate to Google.com', async () => {
    await page.goto('https://google.com/');
    const url = await page.url();
    expect(url).toContain('google');
    await page.click('button[id="L2AGLb"]');
  });

  await test.step('Step2 : Search for Playwright', async () => {
    await page.type('input[name="q"]', "Playwright");
    await page.keyboard.press('Enter');
    await page.waitForNavigation();
    await page.screenshot({ path: 'Google.png', fullPage: true })    
  });

 

});