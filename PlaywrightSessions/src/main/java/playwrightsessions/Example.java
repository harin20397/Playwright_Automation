package playwrightsessions;

import com.microsoft.playwright.*;
import com.microsoft.playwright.options.*;

public class Example {
  public static void main(String[] args) {
    try (Playwright playwright = Playwright.create()) {
      Browser browser = playwright.firefox().launch(new BrowserType.LaunchOptions().setHeadless(false));
      BrowserContext context = browser.newContext();
      Page page = context.newPage();
      page.navigate("https://emobility.inheritxdev.in/auth/login");
      page.getByTestId("floating-label").click();
      page.getByTestId("floating-label").fill("admin.jeet@yopmail.com");
      page.getByRole(AriaRole.TEXTBOX, new Page.GetByRoleOptions().setName("Password")).click();
      page.getByRole(AriaRole.TEXTBOX, new Page.GetByRoleOptions().setName("Password")).fill("Inx@!123");
      page.getByRole(AriaRole.CHECKBOX, new Page.GetByRoleOptions().setName("I accept the End-user License")).check();
      page.getByRole(AriaRole.BUTTON, new Page.GetByRoleOptions().setName("Sign In")).click();
      page.locator(".hover\\:text-primary.group-hover\\/menu\\:text-primary.dark\\:text-white").first().click();
      page.getByRole(AriaRole.LINK, new Page.GetByRoleOptions().setName("Sign Out")).click();
      page.getByRole(AriaRole.BUTTON, new Page.GetByRoleOptions().setName("Yes")).click();
    }
  }
}