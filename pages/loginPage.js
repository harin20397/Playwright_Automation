// LoginPage class for Gypsy Nurse application
const BasePage = require('./basePage');

class LoginPage extends BasePage {
  constructor(page) {
    super(page);
    // Locators
    this.EMAIL_INPUT = '#email';
    this.PASSWORD_INPUT = '#password';
    this.LOGIN_BUTTON = 'button[type="submit"]';
    this.ERROR_MESSAGE = '.error-message';
    this.FORGOT_PASSWORD_LINK = 'text=Forgot Password?';
    this.SIGNUP_LINK = 'text=Sign Up';
  }

  async enterEmail(email) {
    await this.enterText(this.EMAIL_INPUT, email);
  }

  async enterPassword(password) {
    await this.enterText(this.PASSWORD_INPUT, password);
  }

  async clickLoginButton() {
    await this.click(this.LOGIN_BUTTON);
  }

  async login(email, password) {
    await this.enterEmail(email);
    await this.enterPassword(password);
    await this.clickLoginButton();
  }

  async getErrorMessage() {
    return await this.getText(this.ERROR_MESSAGE);
 }

  async isErrorMessagePresent() {
    return await this.isElementPresent(this.ERROR_MESSAGE);
  }

  async clickForgotPassword() {
    await this.click(this.FORGOT_PASSWORD_LINK);
  }

  async clickSignup() {
    await this.click(this.SIGNUP_LINK);
  }
}

module.exports = LoginPage;
