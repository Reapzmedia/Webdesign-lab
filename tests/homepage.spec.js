const { test, expect } = require('@playwright/test');

test('homepage loads and displays correct title and header', async ({ page }) => {
  // Assuming Live Server is serving on port 5500
  await page.goto('http://localhost:5500/index.html');
  await expect(page).toHaveTitle(/Base Web Project/i);
  
  const heading = page.locator('h1');
  await expect(heading).toBeVisible();
});

test('theme toggle switches theme attribute on root html', async ({ page }) => {
  await page.goto('http://localhost:5500/index.html');
  const toggleBtn = page.locator('#themeToggleBtn');
  
  await toggleBtn.click();
  const htmlTag = page.locator('html');
  await expect(htmlTag).toHaveAttribute('data-theme', 'light');
});
