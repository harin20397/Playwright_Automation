const {test,expect} = require("@playwright/test")

test("Sign Up Flow",async function({page}){

    await page.goto("http://tgn-frontend-staging-375478166582-us-east-1.s3-website-us-east-1.amazonaws.com/")
    await page.waitForTimeout(3000)
    await page.locator("//a[normalize-space()='Sign Up']").click()
    await page.getByPlaceholder("First name").type("John",{delay:200})
    await page.getByPlaceholder("Last name").type("Doe",{delay:200})
    await page.getByPlaceholder("Enter 10 digits").type("2066578173",{delay:200})
    await page.getByPlaceholder("Enter your email").type("john@mailinator.com",{delay:200})
    await page.getByPlaceholder("Enter your password").type("Harin123",{delay:200})
    await page.getByPlaceholder("Confirm your password").type("Harin123",{delay:200})
    await page.locator("//button[normalize-space()='Register']").click()
    await page.waitForTimeout(3000)
    expect(page).toHaveTitle("The Gypsy Nurse")
})