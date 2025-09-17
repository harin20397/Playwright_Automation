// BasePage class for Gypsy Nurse application
class BasePage {
  constructor(page) {
    this.page = page;
  }

  // Base actions that can be used by all page objects
 async findElement(locator) {
    return this.page.locator(locator);
  }

  async scrollToElement(locator) {
    try {
      const element = this.page.locator(locator);
      await element.scrollIntoViewIfNeeded();
    } catch (error) {
      console.log(`Could not scroll to element: ${locator}`, error.message);
      // Continue execution even if scrolling fails
    }
  }

  async click(locator) {
    // Scroll to element before clicking
    await this.scrollToElement(locator);
    await this.page.locator(locator).click();
 }

  async enterText(locator, text) {
    // Scroll to element before entering text
    await this.scrollToElement(locator);
    const element = this.page.locator(locator);
    
    await element.clear();
    await element.fill(text);
  }

  async getText(locator) {
    // Scroll to element before getting text
    await this.scrollToElement(locator);
    return await this.page.locator(locator).textContent();
  }

  async isElementPresent(locator) {
    try {
      // Scroll to element before checking visibility
      await this.scrollToElement(locator);
      const element = this.page.locator(locator);
      return await element.isVisible();
    } catch (error) {
      return false;
    }
  }
}

module.exports = BasePage;
