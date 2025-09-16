from selenium.webdriver.common.by import By
from pages.base_page import BasePage

class LoginPage(BasePage):
    # Locators
    EMAIL_INPUT = (By.ID, 'email')
    PASSWORD_INPUT = (By.ID, 'password')
    LOGIN_BUTTON = (By.XPATH, '//button[@type='submit']')
    ERROR_MESSAGE = (By.CLASS_NAME, 'error-message')
    FORGOT_PASSWORD_LINK = (By.LINK_TEXT, 'Forgot Password?')
    SIGNUP_LINK = (By.LINK_TEXT, 'Sign Up')

    def __init__(self, driver):
        super().__init__(driver)

    def enter_email(self, email):
        self.enter_text(self.EMAIL_INPUT, email)

    def enter_password(self, password):
        self.enter_text(self.PASSWORD_INPUT, password)

    def click_login_button(self):
        self.click(self.LOGIN_BUTTON)

    def login(self, email, password):
        self.enter_email(email)
        self.enter_password(password)
        self.click_login_button()

    def get_error_message(self):
        return self.get_text(self.ERROR_MESSAGE)

    def is_error_message_present(self):
        return self.is_element_present(self.ERROR_MESSAGE)

    def click_forgot_password(self):
        self.click(self.FORGOT_PASSWORD_LINK)

    def click_signup(self):
        self.click(self.SIGNUP_LINK)
