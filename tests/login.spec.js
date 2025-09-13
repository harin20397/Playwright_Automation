const {test,expect} = require("@playwright/test")

test.use({viewport:{width:1440,height:900}})

test("Valid login",async function({page}){

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.waitForTimeout(3000)
    await page.getByPlaceholder("Username").type("Admin",{delay:200})
    await page.getByPlaceholder("Password").type("admin123",{delay:200})
    await page.locator("button[type='submit']").click()
    
    await expect(page).toHaveURL(/dashboard/)
    await page.waitForTimeout(3000)

    await page.getByAltText("profile picture").first().click()
    await page.waitForTimeout(2000)
    await page.getByText("Logout").click()

    await page.waitForTimeout(3000)
    await expect(page).toHaveURL(/login/)
})