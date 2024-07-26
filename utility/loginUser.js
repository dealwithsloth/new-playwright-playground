const { expect } = require('@playwright/test');
const testData = require('../fixtures/test.data.json');
const RegisterPage = require('../pageObjects/registerPage');
const MyAccountSection = require('../pageObjects/myAccountSection');

async function login(page) {
  const registerPage = new RegisterPage(page);
  const myAccountSection = new MyAccountSection(page);

  await page.goto('/index.php?route=account/login');
  await expect(registerPage.emailInput).toBeVisible();
  await registerPage.emailInput.fill(testData.userCorrect.mailAddress);
  await expect(registerPage.passwordInput).toBeVisible();
  await registerPage.passwordInput.fill(testData.userCorrect.password);
  await expect(registerPage.continueButton).toBeVisible();
  await registerPage.continueButton.click()
  await expect(myAccountSection.myAccountContent).toBeVisible();
  await expect(myAccountSection.myAccountContent).toContainText('My Account');
}

module.exports = { login };