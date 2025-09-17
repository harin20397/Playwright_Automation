# Gypsy Nurse Playwright Automation

This project contains automated tests for the Gypsy Nurse web application using Playwright with JavaScript.

## Recent Changes

**September 2025**: Removed all Python-related files from the project. The test suite is now exclusively using JavaScript with Playwright, providing a more consistent and maintainable codebase.

## Project Structure

```
gypsy-nurse-playwright/
├── pages/
│   ├── loginPage.js
│   ├── profilePage.js
│   └── dashboardPage.js
├── tests/
│   ├── authentication.test.js
│   └── profile.test.js
├── utils/
│   ├── config.js
│   └── helpers.js
├── reports/
├── screenshots/
├── package.json
└── playwright.config.js
```

## Page Object Model

The project follows the Page Object Model (POM) design pattern to enhance test maintenance and reduce code duplication. Each page in the application has a corresponding page object class.

### Page Objects

1. **LoginPage** - Handles login page interactions
2. **ProfilePage** - Handles profile page interactions
3. **DashboardPage** - Handles dashboard page interactions

## Test Coverage

### Authentication Tests
- Successful login with valid credentials
- Unsuccessful login with invalid credentials
- Unsuccessful login with empty credentials
- Unsuccessful login with empty email
- Unsuccessful login with empty password

### Profile Tests
- View profile page
- Update personal information
- Update contact information
- Update personal information with empty fields
- Update personal information with invalid email

## Setup

1. Install dependencies:
   ```
   npm install
   ```

2. Install Playwright browsers:
   ```
   npx playwright install
   ```

## Running Tests

### Run all tests
```
npm test
```

### Run authentication tests only
```
npm run test:auth
```

### Run profile tests only
```
npm run test:profile
```

### Run tests in UI mode
```
npm run test:ui
```

### View test report
```
npm run test:report
```

## Configuration

The project uses `playwright.config.js` for test configuration and `utils/config.js` for application-specific settings.

## CI/CD Integration

The project is configured to work with CI/CD pipelines. Tests will automatically retry on failure in CI environments.
