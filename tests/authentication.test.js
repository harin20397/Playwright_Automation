// Authentication tests for Gypsy Nurse application
const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/loginPage');
const config = require('../utils/config');

test.describe('Authentication Tests', () => {
  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await page.goto('/login');
  });

  test('Successful login with valid credentials', async ({ page }) => {
    await loginPage.enterEmail(config.credentials.valid.email);
    await page.waitForTimeout(2000); // Delay to visualize email entry
    await loginPage.enterPassword(config.credentials.valid.password);
    await page.waitForTimeout(2000); // Delay to visualize password entry
    await loginPage.clickLoginButton();
    await page.waitForTimeout(2000); // Delay to visualize login button click
    
    // Verify successful login by checking if redirected away from login page
    // Wait for navigation to complete
    await page.waitForLoadState('networkidle');
    const currentUrl = page.url();
    console.log('Current URL after login:', currentUrl);
    
    // Check that we're no longer on the login page
    await expect(page).not.toHaveURL(/.*login/);
 });

  test('Unsuccessful login with invalid credentials', async ({ page }) => {
    await loginPage.enterEmail(config.credentials.invalid.email);
    await page.waitForTimeout(2000); // Delay to visualize email entry
    await loginPage.enterPassword(config.credentials.invalid.password);
    await page.waitForTimeout(2000); // Delay to visualize password entry
    await loginPage.clickLoginButton();
    await page.waitForTimeout(2000); // Delay to visualize login button click
    
    // Verify that we remain on the login page after failed login
    await page.waitForLoadState('networkidle');
    await expect(page).toHaveURL(/.*login/);
    
    // Check if we're still on the login page (which indicates failed login)
    await page.waitForLoadState('networkidle');
    const currentUrl = page.url();
    console.log('Current URL after failed login attempt:', currentUrl);
    
    // Verify that we remain on the login page after failed login
    expect(currentUrl).toContain('login');
    
    // Note: Currently the application doesn't display error messages after failed login
    console.log('Note: No error message displayed after failed login (current application behavior)');
  });

  test('Unsuccessful login with empty credentials', async ({ page }) => {
    await page.waitForTimeout(2000); // Delay to visualize empty login attempt
    await loginPage.clickLoginButton();
    await page.waitForTimeout(2000); // Delay to visualize login button click
    
    // Check if we're still on the login page (which indicates failed login)
    await page.waitForLoadState('networkidle');
    const currentUrl = page.url();
    console.log('Current URL after failed login attempt with empty credentials:', currentUrl);
    
    // Verify that we remain on the login page after failed login
    expect(currentUrl).toContain('login');
    
    // Note: Currently the application doesn't display error messages after failed login
    console.log('Note: No error message displayed after login attempt with empty credentials (current application behavior)');
  });

  test('Unsuccessful login with empty email', async ({ page }) => {
    await loginPage.enterPassword(config.credentials.valid.password);
    await page.waitForTimeout(2000); // Delay to visualize password entry
    await loginPage.clickLoginButton();
    await page.waitForTimeout(2000); // Delay to visualize login button click
    
    // Check if we're still on the login page (which indicates failed login)
    await page.waitForLoadState('networkidle');
    const currentUrl = page.url();
    console.log('Current URL after failed login attempt with empty email:', currentUrl);
    
    // Verify that we remain on the login page after failed login
    expect(currentUrl).toContain('login');
    
    // Note: Currently the application doesn't display error messages after failed login
    console.log('Note: No error message displayed after login attempt with empty email (current application behavior)');
  });

  test('Unsuccessful login with empty password', async ({ page }) => {
    await loginPage.enterEmail(config.credentials.valid.email);
    await page.waitForTimeout(2000); // Delay to visualize email entry
    await loginPage.clickLoginButton();
    await page.waitForTimeout(2000); // Delay to visualize login button click
    
    // Check if we're still on the login page (which indicates failed login)
    await page.waitForLoadState('networkidle');
    const currentUrl = page.url();
    console.log('Current URL after failed login attempt with empty password:', currentUrl);
    
    // Verify that we remain on the login page after failed login
    expect(currentUrl).toContain('login');
    
    // Note: Currently the application doesn't display error messages after failed login
    console.log('Note: No error message displayed after login attempt with empty password (current application behavior)');
  });

  test.only('Successful sign out from user menu', async ({ page }) => {
    // First, login with valid credentials
    await loginPage.enterEmail(config.credentials.valid.email);
    await loginPage.enterPassword(config.credentials.valid.password);
    await loginPage.clickLoginButton();
    
    // Wait for login to complete
    await page.waitForLoadState('networkidle');
    const loginUrl = page.url();
    if (loginUrl.includes('/login')) {
      throw new Error('Login failed - still on login page');
    }
    
    // Add a small delay to ensure the page is fully loaded
    await page.waitForTimeout(2000);
    
    try {
      // Locate and click the user menu button
      // Based on the page structure, the button has text "JD John"
      const userMenuButton = page.locator("//div[@class='w-8 h-8 bg-gray-400 text-black rounded-full flex items-center justify-center text-sm font-semibold overflow-hidden']");
      
      // Wait for user menu button to be visible and click it
      await userMenuButton.waitFor({ state: 'visible', timeout: 10000 });
      await userMenuButton.click();
      
      // Wait for dropdown to open
      await page.waitForTimeout(1000);
      
      // Locate and click the sign out button from the dropdown
      // Based on the page structure, the button has text "Sign Out"
      const signOutButton = page.locator('button:has-text("Sign Out")');
      
      // Wait for sign out button to be visible and click it
      await signOutButton.waitFor({ state: 'visible', timeout: 5000 });
      await signOutButton.click();
      
      // Wait for navigation after sign out
      await page.waitForLoadState('networkidle');
      
      // Verify that we're redirected to the home page after sign out
      const finalUrl = page.url();
      console.log('Current URL after sign out:', finalUrl);
      
      // Check that we're on the home page (not login page)
      // After sign out, users are redirected to the home page in this application
      expect(finalUrl).toEqual('http://tgn-frontend-staging-375478166582-us-east-1.s3-website-us-east-1.amazonaws.com/');
      
      console.log('Success: User signed out and redirected to home page');
    } catch (error) {
      console.log('Error during sign out:', error.message);
      console.log('Current page URL:', page.url());
      throw error;
    }
  });
});
