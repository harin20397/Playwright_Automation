// ProfilePage class for Gypsy Nurse application
const BasePage = require('./basePage');

class ProfilePage extends BasePage {
  constructor(page) {
    super(page);
    // Locators for elements available on the profile page
    this.PROFILE_TAB = 'a:has-text("Profile")';
    this.EDIT_BUTTON = 'button:has-text("Edit")';
    this.SAVE_BUTTON = 'button:has-text("Update Profile")';
    this.FIRST_NAME_INPUT = 'input[name="firstName"]';
    this.LAST_NAME_INPUT = 'input[name="lastName"]';
    this.DATE_OF_BIRTH_INPUT = 'input[name="dateOfBirth"]';
    this.SSN_INPUT = 'input[name="ssn"]';
    this.YEARS_OF_EXPERIENCE_INPUT = 'input[name="yearsOfExperience"]';
    this.STREET_ADDRESS_INPUT = 'input[name="streetAddress"]';
    this.APARTMENT_INPUT = 'input[name="address"]'; // This is for apartment/suite info
    this.CITY_INPUT = 'input[name="city"]';
    this.STATE_INPUT = 'input[placeholder="Select state"]'; // Simplified locator for state input
    this.ZIP_INPUT = 'input[name="zipcode"]';
    this.SUCCESS_MESSAGE = '.success-message';
    this.ERROR_MESSAGE = '.error-message';
    // User menu and logout locators
    this.USER_MENU_BUTTON = 'button:has-text("JD John"), .user-menu, .avatar, .user-profile';
    this.LOGOUT_BUTTON = 'button:has-text("Logout")';
  }

  async clickProfileTab() {
    await this.click(this.PROFILE_TAB);
  }

  async clickEditButton() {
    await this.click(this.EDIT_BUTTON);
    // Wait a bit for the form to appear after clicking edit
    try {
      await this.page.waitForTimeout(3000);
    } catch (error) {
      console.log('Warning: waitForTimeout failed, continuing with edit button click');
    }
  }

  async clickSaveButton() {
    // Scroll to save button before clicking
    await this.scrollToElement(this.SAVE_BUTTON);
    await this.click(this.SAVE_BUTTON);
    // Wait a bit for the form to submit
    try {
      await this.page.waitForTimeout(3000);
    } catch (error) {
      console.log('Warning: waitForTimeout failed, continuing with save button click');
    }
  }

  async enterFirstName(firstName) {
    await this.enterText(this.FIRST_NAME_INPUT, firstName);
  }

  async enterLastName(lastName) {
    await this.enterText(this.LAST_NAME_INPUT, lastName);
  }

  async enterDateOfBirth(dateOfBirth) {
    await this.enterText(this.DATE_OF_BIRTH_INPUT, dateOfBirth);
  }

  async enterSSN(ssn) {
    await this.enterText(this.SSN_INPUT, ssn);
  }

  async enterYearsOfExperience(years) {
    await this.enterText(this.YEARS_OF_EXPERIENCE_INPUT, years);
  }

  async enterStreetAddress(streetAddress) {
    await this.enterText(this.STREET_ADDRESS_INPUT, streetAddress);
  }

  async enterApartment(apartment) {
    await this.enterText(this.APARTMENT_INPUT, apartment);
  }

  async enterCity(city) {
    await this.enterText(this.CITY_INPUT, city);
  }

  async enterState(state) {
    // Handle state selection for combobox
    const stateInput = this.page.locator(this.STATE_INPUT);
    await this.scrollToElement(this.STATE_INPUT);
    
    // Click the combobox to open the dropdown
    await stateInput.click();
    
    // Wait for dropdown to open
    try {
      await this.page.waitForTimeout(1000);
    } catch (error) {
      console.log('Warning: waitForTimeout failed, continuing with state selection');
    }
    
    // Try to select the state by clicking on the option
    try {
      // Look for the specific state option in the dropdown
      const stateOption = this.page.locator(`text=${state}`);
      if (await stateOption.isVisible()) {
        await stateOption.click();
      } else {
        // If option is not visible, try filling and pressing Enter
        await stateInput.fill(state);
        try {
          await this.page.waitForTimeout(500);
        } catch (error) {
          console.log('Warning: waitForTimeout failed, continuing with state selection');
        }
        await this.page.keyboard.press('Enter');
      }
    } catch (error) {
      // Fallback: fill and press Enter
      await stateInput.fill(state);
      try {
        await this.page.waitForTimeout(500);
      } catch (error) {
        console.log('Warning: waitForTimeout failed, continuing with state selection');
      }
      await this.page.keyboard.press('Enter');
    }
    
    // Wait for selection to register
    try {
      await this.page.waitForTimeout(500);
    } catch (error) {
      console.log('Warning: waitForTimeout failed, continuing with state selection');
    }
 }

  async enterZip(zip) {
    await this.enterText(this.ZIP_INPUT, zip);
  }

  async enterAddress(address) {
    await this.enterText(this.APARTMENT_INPUT, address);
  }

  async updatePersonalInfo(firstName, lastName) {
    await this.clickEditButton();
    await this.enterFirstName(firstName);
    await this.enterLastName(lastName);
    await this.clickSaveButton();
  }

  async updateProfessionalInfo(dateOfBirth, ssn, yearsOfExperience) {
    await this.clickEditButton();
    await this.enterDateOfBirth(dateOfBirth);
    await this.enterSSN(ssn);
    await this.enterYearsOfExperience(yearsOfExperience);
    await this.clickSaveButton();
  }

  async updateContactInfo(streetAddress, apartment, city, state, zip) {
    await this.clickEditButton();
    await this.enterStreetAddress(streetAddress);
    await this.enterApartment(apartment);
    await this.enterCity(city);
    await this.enterState(state);
    await this.enterZip(zip);
    await this.clickSaveButton();
  }

  async updateAllProfileInfo(firstName, lastName, dateOfBirth, ssn, yearsOfExperience, streetAddress, apartment, city, state, zip) {
    await this.clickEditButton();
    await this.enterFirstName(firstName);
    await this.enterLastName(lastName);
    await this.enterDateOfBirth(dateOfBirth);
    await this.enterSSN(ssn);
    await this.enterYearsOfExperience(yearsOfExperience);
    await this.enterStreetAddress(streetAddress);
    await this.enterApartment(apartment);
    await this.enterCity(city);
    await this.enterState(state);
    await this.enterZip(zip);
    await this.clickSaveButton();
  }

  async isSuccessMessagePresent() {
    // Scroll to success message before checking visibility
    await this.scrollToElement(this.SUCCESS_MESSAGE);
    return await this.isElementPresent(this.SUCCESS_MESSAGE);
  }

  async isErrorMessagePresent() {
    // Scroll to error message before checking visibility
    await this.scrollToElement(this.ERROR_MESSAGE);
    return await this.isElementPresent(this.ERROR_MESSAGE);
 }

  async getSuccessMessage() {
    // Scroll to success message before getting text
    await this.scrollToElement(this.SUCCESS_MESSAGE);
    return await this.getText(this.SUCCESS_MESSAGE);
  }

  async getErrorMessage() {
    // Scroll to error message before getting text
    await this.scrollToElement(this.ERROR_MESSAGE);
    return await this.getText(this.ERROR_MESSAGE);
  }
}

module.exports = ProfilePage;
