// DashboardPage class for Gypsy Nurse application
class DashboardPage {
  constructor(page) {
    this.page = page;
  }

  // Locators
  get dashboardHeader() { return this.page.locator('h1:has-text("Dashboard")'); }
  get userMenu() { return this.page.locator('.user-menu, .avatar, .user-profile, [data-testid="user-menu"]'); }
  get profileLink() { return this.page.locator('a:has-text("Profile"), [data-testid="profile-link"]'); }
  get logoutButton() { return this.page.locator('button:has-text("Logout")'); }
  get welcomeMessage() { return this.page.locator('.welcome-message'); }
  get navigationMenu() { return this.page.locator('.navigation-menu'); }

  // Actions
  async isDashboardDisplayed() {
    try {
      return await this.dashboardHeader.isVisible({ timeout: 5000 });
    } catch (error) {
      return false;
    }
  }

  async clickUserMenu() {
    try {
      // Wait for the user menu to be visible before clicking with shorter timeout
      await this.userMenu.waitFor({ state: 'visible', timeout: 5000 });
      await this.userMenu.click();
      // Wait a bit for dropdown to open
      await this.page.waitForTimeout(1000);
    } catch (error) {
      console.log('Could not click user menu:', error.message);
      throw error;
    }
  }

  async clickProfileLink() {
    try {
      // Wait for the profile link to be visible before clicking with shorter timeout
      await this.profileLink.waitFor({ state: 'visible', timeout: 5000 });
      await this.profileLink.click();
      // Wait a bit for navigation
      await this.page.waitForTimeout(1000);
    } catch (error) {
      console.log('Could not click profile link:', error.message);
      throw error;
    }
  }

  async clickLogoutButton() {
    try {
      await this.logoutButton.click();
    } catch (error) {
      console.log('Could not click logout button:', error.message);
      throw error;
    }
  }

  async getWelcomeMessage() {
    try {
      return await this.welcomeMessage.textContent();
    } catch (error) {
      console.log('Could not get welcome message:', error.message);
      return '';
    }
  }
}

module.exports = DashboardPage;
