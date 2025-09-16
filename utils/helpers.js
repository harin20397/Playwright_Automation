// Helper functions for Gypsy Nurse Playwright tests
const { expect } = require('@playwright/test');

class Helpers {
  // Generate random email for testing
  static generateRandomEmail() {
    return 'user' + Math.floor(Math.random() * 10000) + '@mailinator.com';
  }

  // Generate random string for testing
  static generateRandomString(length = 10) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }

  // Wait for element to be visible
  static async waitForElementVisible(page, selector, timeout = 1000) {
    await page.waitForSelector(selector, { state: 'visible', timeout });
  }

  // Wait for element to be hidden
  static async waitForElementHidden(page, selector, timeout = 10000) {
    await page.waitForSelector(selector, { state: 'hidden', timeout });
  }

  // Check if element exists
  static async isElementExists(page, selector) {
    try {
      await page.waitForSelector(selector, { state: 'visible', timeout: 5000 });
      return true;
    } catch (error) {
      return false;
    }
  }

  // Get text content of an element
  static async getElementText(page, selector) {
    const element = await page.;
    return await element.textContent();
  }

  // Clear and fill input field
  static async clearAndFill(page, selector, value) {
    await page.fill(selector, value);
  }

  // Validate email format
  static validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Validate phone number format
  static validatePhoneNumber(phone) {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone);
  }
}

module.exports = Helpers;
