const { test, expect } = require('@playwright/test');
const HomePage = require('../pageObjects/homePage');
const LoginPage = require('../pageObjects/loginPage');
const MyAccountSection = require('../pageObjects/myAccountSection');
const testData = require('../fixtures/test.data.json');

test.describe('User login test', () => {
    let homePage;
    let loginPage;
    let myAccountSection;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        loginPage = new LoginPage(page);
        myAccountSection = new MyAccountSection(page);

        await page.goto('/');
        await homePage.myAccountDropdown.hover();
        await homePage.loginButton.click();
        await expect(loginPage.breadcrumbs).toBeVisible();
        await expect(loginPage.returningCustomerCardBody).toBeVisible();
        await expect(loginPage.returningCustomerCardBody).toContainText('Returning Customer');
    });

    test('Login - empty fields', async ({ page }) => {
        await expect(loginPage.logInButton).toBeVisible();
        await loginPage.logInButton.click();
        await expect(loginPage.errorMessage).toBeVisible();
        await expect(loginPage.errorMessage).toContainText('Warning');
    });

    test('Login - wrong credentials', async ({ page }) => {
        await loginPage.emailInput.fill(testData.userCorrect.mailAddress);
        await loginPage.passwordInput.fill(testData.userIncorrect.password);
        await expect(loginPage.logInButton).toBeVisible();
        await loginPage.logInButton.click();
        await expect(loginPage.errorMessage).toBeVisible();
        await expect(loginPage.errorMessage).toContainText('No match for E-Mail Address and/or Password.');
    });

    test('Login - forgotten password link', async ({ page }) => {
        await expect(loginPage.forgottenPasswordLink).toBeVisible();
        await loginPage.forgottenPasswordLink.click();
        await expect(loginPage.pageTitle).toBeVisible();
        await expect(loginPage.pageTitle).toContainText('Forgot Your Password?');
    });

    test('Login - correct credentials, success and logout', async ({ page }) => {
        await loginPage.emailInput.fill(testData.userCorrect.mailAddress);
        await loginPage.passwordInput.fill(testData.userCorrect.password);
        await expect(loginPage.logInButton).toBeVisible();
        await loginPage.logInButton.click();
        await expect(myAccountSection.myAccountContent).toBeVisible();
        await expect(myAccountSection.myAccountContent).toContainText('My Account');
        await homePage.myAccountDropdown.hover();
        await expect(homePage.logoutButton).toBeVisible();
        await homePage.logoutButton.click();
        await expect(loginPage.pageTitle).toBeVisible();
        await expect(loginPage.pageTitle).toContainText('Account Logout');
    });
});