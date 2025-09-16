class BasePage:
    def __init__(self, driver):
        self.driver = driver

    def find_element(self, locator):
        return self.driver.find_element(*locator)

    def find_elements(self, locator):
        return self.driver.find_elements(*locator)

    def click(self, locator):
        self.find_element(locator).click()

    def enter_text(self, locator, text):
        self.find_element(locator).clear()
        self.find_element(locator).send_keys(text)

    def get_text(self, locator):
        return self.find_element(locator).text

    def is_element_present(self, locator):
        try:
            self.find_element(locator)
            return True
        except:
            return False
