const {test,expect} = require('@playwright/test');

test('Home Page', async ({page}) => {
    await page.goto('https://www.totalmed.com/');

    const pageTitle = page.title();
    console.log("Page Title is: " + pageTitle);

    await expect(page).toHaveTitle('TotalMed Premier Healthcare Staffing Solutions | TotalMed+');

    const pageURL = page.url();
    console.log("Page URL is: " + pageURL);
    
    await expect(page).toHaveURL('https://www.totalmed.com/');

    await page.close();
})