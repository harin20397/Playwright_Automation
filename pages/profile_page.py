from selenium.webdriver.common.by import By
from pages.base_page import BasePage

class ProfilePage(BasePage):
    # Locators
    PROFILE_TAB = (By.XPATH, '//a[contains(text(), 'Profile')]')
    PERSONAL_INFO_SECTION = (By.ID, 'personal-info')
    CONTACT_INFO_SECTION = (By.ID, 'contact-info')
    PREFERENCES_SECTION = (By.ID, 'preferences')
    EDIT_BUTTON = (By.XPATH, '//button[contains(text(), 'Edit')]')
    SAVE_BUTTON = (By.XPATH, '//button[contains(text(), 'Save')]')
    FIRST_NAME_INPUT = (By.NAME, 'firstName')
    LAST_NAME_INPUT = (By.NAME, 'lastName')
    EMAIL_INPUT = (By.NAME, 'email')
    PHONE_INPUT = (By.NAME, 'phone')
    ADDRESS_INPUT = (By.NAME, 'address')
    CITY_INPUT = (By.NAME, 'city')
    STATE_INPUT = (By.NAME, 'state')
    ZIP_INPUT = (By.NAME, 'zip')
    SUCCESS_MESSAGE = (By.CLASS_NAME, 'success-message')
    ERROR_MESSAGE = (By.CLASS_NAME, 'error-message')

    def __init__(self, driver):
        super().__init__(driver)

    def click_profile_tab(self):
        self.click(self.PROFILE_TAB)

    def click_edit_button(self):
        self.click(self.EDIT_BUTTON)

    def click_save_button(self):
        self.click(self.SAVE_BUTTON)

    def enter_first_name(self, first_name):
        self.enter_text(self.FIRST_NAME_INPUT, first_name)

    def enter_last_name(self, last_name):
        self.enter_text(self.LAST_NAME_INPUT, last_name)

    def enter_email(self, email):
        self.enter_text(self.EMAIL_INPUT, email)

    def enter_phone(self, phone):
        self.enter_text(self.PHONE_INPUT, phone)

    def enter_address(self, address):
        self.enter_text(self.ADDRESS_INPUT, address)

    def enter_city(self, city):
        self.enter_text(self.CITY_INPUT, city)

    def enter_state(self, state):
        self.enter_text(self.STATE_INPUT, state)

    def enter_zip(self, zip_code):
        self.enter_text(self.ZIP_INPUT, zip_code)

    def update_personal_info(self, first_name, last_name):
        self.click_edit_button()
        self.enter_first_name(first_name)
        self.enter_last_name(last_name)
        self.click_save_button()

    def update_contact_info(self, email, phone, address, city, state, zip_code):
        self.click_edit_button()
        self.enter_email(email)
        self.enter_phone(phone)
        self.enter_address(address)
        self.enter_city(city)
        self.enter_state(state)
        self.enter_zip(zip_code)
        self.click_save_button()

    def is_success_message_present(self):
        return self.is_element_present(self.SUCCESS_MESSAGE)

    def is_error_message_present(self):
        return self.is_element_present(self.ERROR_MESSAGE)

    def get_success_message(self):
        return self.get_text(self.SUCCESS_MESSAGE)

    def get_error_message(self):
        return self.get_text(self.ERROR_MESSAGE)
