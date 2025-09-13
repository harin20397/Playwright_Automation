/*const{test,expect} = require("@playwright/test")

test("Verify Error Message",async function({page}){

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.waitForTimeout(3000)
    await page.getByPlaceholder("Username").type("Admin")
    await page.getByPlaceholder("Password").type("admin1234")
    await page.locator("//button[normalize-space()='Login']").click()
    const errorMessage = await page.locator("//p[@class='oxd-text oxd-text--p oxd-alert-content-text']").textContent()
    console.log("The error message is:" +errorMessage)
    expect(errorMessage.includes("Invalid")).toBeTruthy()
    expect(errorMessage==="Invalid credentials").toBeTruthy()
    await page.waitForTimeout(2000)
})*/

const{test,expect} = require("@playwright/test")

test("Verify Error Message",async function({page}){

    await page.goto("https://emobility.inheritxdev.in/auth/login")
    console.log(await page.viewportSize().width)
    console.log(await page.viewportSize().height)
    await page.locator("//input[@id='email']").type("admin.jeet@yopmail.com")
    await page.locator("//input[@id='password']").type("Inx@!1234")
    await page.locator("//input[@id='acceptEula']").click()
    await page.locator("//span[@class='flex items-center gap-1 md:gap-2 transition-all duration-150 justify-center rounded-md px-4 py-2 text-sm']").click()
    await page.waitForTimeout(3000)
    const errorMessage = await page.locator("//div[contains(text(),'Your account is locked')]").textContent()
    await page.waitForTimeout(3000)
    console.log("The error message is: " +errorMessage)
    expect(errorMessage.includes("Your account is locked")).toBeTruthy()
})