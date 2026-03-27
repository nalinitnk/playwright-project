import { test, expect } from '@playwright/test';
 

test('cart validation', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // 2. Capture initial cart count (optional)
  const cart = page.locator('.shopping_cart_badge');
   

  // 3. Add product to cart
  await page.locator('text=Add to cart').first().click();

  // 4. Validate cart updated
  await expect(cart).toHaveText('1');
  console.log("Cart count after adding product", await cart.textContent());
   
});