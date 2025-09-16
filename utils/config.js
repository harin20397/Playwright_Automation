// Configuration file for Gypsy Nurse Playwright tests
const config = {
  // Base URL for the application
  baseURL: 'http://tgn-frontend-staging-375478166582-us-east-1.s3-website-us-east-1.amazonaws.com',
  
  // Login credentials
  credentials: {
    valid: {
      email: 'john@mailinator.com',
      password: 'Harin123'
    },
    invalid: {
      email: 'invalid@example.com',
      password: 'wrongpassword'
    }
  },
  
  // Timeout settings
  timeouts: {
    element: 10000,
    page: 30000,
    test: 60000
  },
  
  // Browser settings
  browsers: [
    'chromium',
    'firefox',
    'webkit'
  ],
  
  // Test data
  testData: {
    personalInfo: {
      firstName: 'John',
      lastName: 'Doe'
    },
    contactInfo: {
      email: 'john.doe@example.com',
      phone: '123-456-7890',
      address: '123 Main St',
      city: 'New York',
      state: 'NY',
      zip: '10001'
    }
  }
};

module.exports = config;
