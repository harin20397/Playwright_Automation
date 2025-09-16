// LoginPage class for Gypsy Nurse application
class LoginPage {
  constructor(page) {
    this.page = page;
  }

  // Locators
  get emailInput() { return this.page.locator('#email'); }
  get passwordInput() { return this.page.locator('#password'); }
  get loginButton() { return this.page.locator('button[type="submit"]'); }
  get errorMessage() { return this.page.locator('.error-message'); }
  get forgotPasswordLink() { return this.page.locator('text=Forgot Password?'); }
  get signupLink() { return this.page.locator('text=Sign Up'); }

  // Actions
  async enterEmail(email) {
    await this.emailInput.fill(email);
  }

  async enterPassword(password) {
    await this.passwordInput.fill(password);
  }

  async clickLoginButton() {
    await this.loginButton.click();
  }

  async login(email, password) {
    await this.enterEmail(email);
    await this.enterPassword(password);
    await this.clickLoginButton();
  }

  async getErrorMessage() {
    return await this.errorMessage.textContent();
  }

  async isErrorMessageVisible() {
    // Adding a wait to ensure the element has time to appear
    try {
      await this.errorMessage.waitFor({ state: 'visible', timeout: 5000 });
      return await this.errorMessage.isVisible();
    } catch (error) {
      // If the element is not visible, return false
      return false;
    }
  }

  // Try to find any error message on the page
  async findAnyErrorMessage() {
    // Wait a bit for any potential error messages to appear
    await this.page.waitForTimeout(2000);
    
    // Try different possible error message selectors
    const possibleErrorSelectors = [
      '.error-message',
      '.error',
      '.alert',
      '.notification.error',
      '[role="alert"]',
      '.text-danger',
      '.invalid-feedback'
    ];
    
    for (const selector of possibleErrorSelectors) {
      const element = this.page.locator(selector);
      if (await element.isVisible()) {
        return {
          found: true,
          text: await element.textContent(),
          selector: selector
        };
      }
    }
    
    // If no error message found, return the page title and URL for debugging
    const title = await this.page.title();
    const url = this.page.url();
    return {
      found: false,
      title: title,
      url: url
    };
  }

  async clickForgotPassword() {
    await this.forgotPasswordLink.click();
  }

  async clickSignup() {
    await this.signupLink.click();
  }
}

module.exports = LoginPage;
