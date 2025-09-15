const {test, expect} = require('@playwright/test');

test("Profile Page - View and Edit Profile", async function({page}){

     // Navigate to the homepage
    await page.goto("http://tgn-frontend-staging-375478166582-us-east-1.s3-website-us-east-1.amazonaws.com/")
    await page.waitForTimeout(3000)

    // Click on the 'Login' link
    await page.locator("//a[normalize-space()='Login']").click()
    await page.waitForTimeout(2000)

    // Enter valid email and password
    await page.getByPlaceholder("Enter your email").type("john@mailinator.com", { delay: 200 })
    await page.getByPlaceholder("Enter your password").type("Harin123", { delay: 200 })

    //Click the eye icon to view the password
    await page.locator("//button[@aria-label='Show password']//*[name()='svg']").click()
    await page.waitForTimeout(1000)

    // Click the Login button
    await page.locator("//button[normalize-space()='Login']").click()
    await page.waitForTimeout(5000)

    // Open user menu and sign out
    await page.locator("//div[@class='w-8 h-8 bg-gray-400 text-black rounded-full flex items-center justify-center text-sm font-semibold overflow-hidden']").click()
    await page.waitForTimeout(3000)

    // Click on 'Profile' from the user menu
    await page.locator("//a[normalize-space()='My Profile']").click()
    await page.waitForTimeout(3000)
    
    // Verify that the user is on the Profile page
    expect(page).toHaveURL("http://tgn-frontend-staging-375478166582-us-east-1.s3-website-us-east-1.amazonaws.com/profile")
    await page.waitForTimeout(3000)

    // Click on the 'Edit Profile' button
    await page.locator("//span[normalize-space()='Edit']").click()
    await page.waitForTimeout(2000)

    //Scroll to the bottom to ensure the Update Profile button is visible
    await page.evaluate(() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }));
    await page.waitForTimeout(2000)

    //Verify validation messages for all fields when no data is filled
    await page.locator("//button[normalize-space()='Update Profile']").click()
    await page.waitForTimeout(2000)

    await expect(page.locator("text=Date of birth cannot be in the future")).toBeVisible()
    await expect(page.locator("text=Please enter a valid SSN")).toBeVisible()
    await expect(page.locator("text=Years of experience cannot exceed 50")).toBeVisible()
    await expect(page.locator("text=Street address must be at least 5 characters")).toBeVisible()
    await expect(page.locator("text=City must be at least 2 characters")).toBeVisible()
    await expect(page.locator("text=State must be 2 characters")).toBeVisible()
    await expect(page.locator("text=Zipcode must be exactly 5 digits")).toBeVisible()
})