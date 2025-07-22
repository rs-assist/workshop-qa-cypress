// https://opensource-demo.orangehrmlive.com/

describe('OrangeHRM Login Tests', () => {
  const orangeHRM = require('../../support/pageObjects/OrangeHRM');

  beforeEach(() => {
    orangeHRM.visit();
  });

  it('should display the login form', () => {
    orangeHRM.verifyLoginFormVisible();
  });

  it('should allow a user to log in with valid credentials', () => {
    orangeHRM.enterUsername('Admin');
    orangeHRM.enterPassword('admin123');
    orangeHRM.submitLogin();
    orangeHRM.verifyLoginSuccess();
  });

  it('should not allow a user to log in with invalid credentials', () => {
    orangeHRM.enterUsername('InvalidUser');
    orangeHRM.enterPassword('wrongPassword');
    orangeHRM.submitLogin();
    orangeHRM.verifyLoginFailure();
  });
});

describe('OrangeHRM Adding new User', () => {
  const orangeHRM = require('../../support/pageObjects/OrangeHRM');

  beforeEach(() => {
    orangeHRM.visit();
  });

  it('should add a new user', () => {
    orangeHRM.enterUsername('Admin');
    orangeHRM.enterPassword('admin123');
    orangeHRM.submitLogin();
    orangeHRM.verifyLoginSuccess();
    orangeHRM.navigateToAdmin();
    orangeHRM.addUser();
  });
});