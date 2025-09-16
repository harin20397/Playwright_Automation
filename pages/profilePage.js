// ProfilePage class for Gypsy Nurse application
class ProfilePage {
  constructor(page) {
    this.page = page;
  }

  // Locators
  get profileTab() { return this.page.locator('a:has-text("Profile")'); }
  get personalInfoSection() { return this.page.locator('#personal-info'); }
  get contactInfoSection() { return this.page.locator('#contact-info'); }
  get preferencesSection() { return this.page.locator('#preferences'); }
  get editButton() { return this.page.locator('button:has-text("Edit")'); }
  get saveButton() { return this.page.locator('button:has-text("Save")'); }
  get firstNameInput() { return this.page.locator('input[name="firstName"]'); }
  get lastNameInput() { return this.page.locator('input[name="lastName"]'); }
  get emailInput() { return this.page.locator('input[name="email"]'); }
  get phoneInput() { return this.page.locator('input[name="phone"]'); }
  get addressInput() { return this.page.locator('input[name="address"]'); }
  get cityInput() { return this.page.locator('input[name="city"]'); }
  get stateInput() { return this.page.locator('input[name="state"]'); }
  get zipInput() { return this.page.locator('input[name="zip"]'); }
  get successMessage() { return this.page.locator('.success-message'); }
  get errorMessage() { return this.page.locator('.error-message'); }

  // Actions
  async clickProfileTab() {
    // Wait for the profile tab to be visible before clicking
    await this.profileTab.waitFor({ state: 'visible', timeout: 10000 });
    await this.profileTab.click();
  }

  async clickEditButton() {
    // Wait for the edit button to be visible before clicking
    await this.editButton.waitFor({ state: 'visible', timeout: 10000 });
    await this.editButton.click();
  }

  async clickSaveButton() {
    // Wait for the save button to be visible before clicking
    await this.saveButton.waitFor({ state: 'visible', timeout: 10000 });
    await this.saveButton.click();
  }

  async enterFirstName(firstName) {
    await this.firstNameInput.fill(firstName);
  }

  async enterLastName(lastName) {
    await this.lastNameInput.fill(lastName);
  }

  async enterEmail(email) {
    await this.emailInput.fill(email);
  }

  async enterPhone(phone) {
    await this.phoneInput.fill(phone);
  }

  async enterAddress(address) {
    await this.addressInput.fill(address);
  }

  async enterCity(city) {
    await this.cityInput.fill(city);
  }

  async enterState(state) {
    await this.stateInput.fill(state);
  }

  async enterZip(zip) {
    await this.zipInput.fill(zip);
 }

  async updatePersonalInfo(firstName, lastName) {
    await this.clickEditButton();
    await this.enterFirstName(firstName);
    await this.enterLastName(lastName);
    await this.clickSaveButton();
  }

  async updateContactInfo(email, phone, address, city, state, zip) {
    await this.clickEditButton();
    await this.enterEmail(email);
    await this.enterPhone(phone);
    await this.enterAddress(address);
    await this.enterCity(city);
    await this.enterState(state);
    await this.enterZip(zip);
    await this.clickSaveButton();
  }

  async isSuccessMessageVisible() {
    try {
      await this.successMessage.waitFor({ state: 'visible', timeout: 5000 });
      return await this.successMessage.isVisible();
    } catch (error) {
      return false;
    }
  }

  async isErrorMessageVisible() {
    try {
      await this.errorMessage.waitFor({ state: 'visible', timeout: 5000 });
      return await this.errorMessage.isVisible();
    } catch (error) {
      return false;
    }
  }

  async getSuccessMessage() {
    return await this.successMessage.textContent();
  }

  async getErrorMessage() {
    return await this.errorMessage.textContent();
  }
  
  // Try to find any success message on the page
  async findAnySuccessMessage() {
    // Try different possible success message selectors
    const possibleSuccessSelectors = [
      '.success-message',
      '.success',
      '.alert-success',
      '.notification.success',
      '[role="alert"]',
      '.text-success'
    ];
    
    for (const selector of possibleSuccessSelectors) {
      const element = this.page.locator(selector);
      if (await element.isVisible()) {
        return {
          found: true,
          text: await element.textContent(),
          selector: selector
        };
      }
    }
    
    // If no success message found, return the page title and URL for debugging
    const title = await this.page.title();
    const url = this.page.url();
    return {
      found: false,
      title: title,
      url: url
    };
  }
  
  // Try to find any error message on the page
  async findAnyErrorMessage() {
    // Try different possible error message selectors
    const possibleErrorSelectors = [
      '.error-message',
      '.error',
      '.alert-error',
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
}

module.exports = ProfilePage;
