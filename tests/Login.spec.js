const {test,expect} = require("@playwright/test")

test("Login Flow",async function({page}){

    await page.goto("http://tgn-frontend-staging-375478166582-us-east-1.s3-website-us-east-1.amazonaws.com/")
    await page.waitForTimeout(3000)
    await page.locator("//a[normalize-space()='Login']").click()
    await page.getByPlaceholder("Enter your email").type("john@mailinator.com",{delay:200})
    await page.getByPlaceholder("Enter your password").type("Harin123",{delay:200})
    await page.locator("//button[normalize-space()='Login']").click()
    await page.waitForTimeout(5000)
    await page.locator("//div[@class='w-8 h-8 bg-gray-400 text-black rounded-full flex items-center justify-center text-sm font-semibold overflow-hidden']").click()
    await page.waitForTimeout(3000)
    await page.locator("//button[normalize-space()='Sign Out']").click()
    page.on('dialog',async(dialogWindow)=>{
        // expect(dialogWindow.type()).toContain("confirm")
        // expect(dialogWindow.message()).toContain("Are you sure you want to sign out?")
        await dialogWindow.accept()
    })
    await page.waitForTimeout(2000)
})