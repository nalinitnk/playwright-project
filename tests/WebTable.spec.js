const { test, expect } = require('@playwright/test');

test('webtable', async ({ page }) => {
   await page.goto('https://testautomationpractice.blogspot.com');
  

const table=await page.locator('#productTable')
//number of columns
const columns=await table.locator('thead tr th') 
 console.log("Number of columns",await columns.count())
 //number of rows
 const rows=await table.locator('tbody tr ') 
 console.log("Number of rows",await rows.count())
});

