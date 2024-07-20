const { test, expect } = require('@playwright/test');
const { generateRandomEmailAddress } = require('../utility/stringGenerator')
const HomePage = require('../pageObjects/homePage');
const LoginPage = require('../pageObjects/loginPage');
const RegisterPage = require('../pageObjects/registerPage');
const MyAccountSection = require('../pageObjects/myAccountSection')
const testData = require('../fixtures/test.data.json');

const ERROR_MESSAGE = 'Warning'
const FIRST_NAME_ERROR_MESSAGE = 'First Name must be between 1 and 32 characters!'
const LAST_NAME_ERROR_MESSAGE = 'Last Name must be between 1 and 32 characters!'
const EMAIL_ADDRESS_ERROR_MESSAGE = 'E-Mail Address does not appear to be valid!'
const PHONE_NUMBER_ERROR_MESSAGE = 'Telephone must be between 3 and 32 characters!'
const REQUIRED_PASSWORD_ERROR_MESSAGE = 'Password must be between 4 and 20 characters!'
const CONFIRM_PASSWORD_ERROR_MESSAGE = 'Password confirmation does not match password!'
const PRIVACY_POLICY_AGREEMENTS_ERROR_MESSAGE = 'You must agree to the Privacy Policy!'

test.describe('User register test', () => {
    let homePage;
    let loginPage;
    let myAccountSection;
    let registerPage;
    let randomEmail;

    test.beforeEach(async ({ page }) => {
        randomEmail = generateRandomEmailAddress()
        homePage = new HomePage(page);
        loginPage = new LoginPage(page);
        myAccountSection = new MyAccountSection(page);
        registerPage = new RegisterPage(page);

        await page.goto('/');
        await homePage.myAccountDropdown.hover();
        await homePage.registerButton.click();
        await expect(page).toHaveURL('/index.php?route=account/register');
        await expect(registerPage.continueButton).toBeVisible();
        await expect(loginPage.accountRegisterBody).toBeVisible();
        await expect(loginPage.accountRegisterBody).toContainText('Register Account');
    });

    test('Register - empty fields', async ({ page }) => {
        await expect(page).toHaveURL('/index.php?route=account/register');
        await expect(registerPage.continueButton).toBeVisible();
        await registerPage.continueButton.click();
        await expect(loginPage.errorMessage).toBeVisible();
        await expect(loginPage.errorMessage).toContainText(ERROR_MESSAGE);
        await expect(registerPage.requiredFirstNameErrorMessage).toBeVisible()
        await expect(registerPage.requiredFirstNameErrorMessage).toContainText(FIRST_NAME_ERROR_MESSAGE);
        await expect(registerPage.requiredLastNameErrorMessage).toBeVisible()
        await expect(registerPage.requiredLastNameErrorMessage).toContainText(LAST_NAME_ERROR_MESSAGE);
        await expect(registerPage.requiredMailAddressErrorMessage).toBeVisible()
        await expect(registerPage.requiredMailAddressErrorMessage).toContainText(EMAIL_ADDRESS_ERROR_MESSAGE);
        await expect(registerPage.requiredPhoneNumberErrorMessage).toBeVisible()
        await expect(registerPage.requiredPhoneNumberErrorMessage).toContainText(PHONE_NUMBER_ERROR_MESSAGE);
        await expect(registerPage.requiredPasswordErrorMessage).toBeVisible()
        await expect(registerPage.requiredPasswordErrorMessage).toContainText(REQUIRED_PASSWORD_ERROR_MESSAGE);
    });

    test('Register - wrong email address format', async ({ page }) => {
        await expect(page).toHaveURL('/index.php?route=account/register');
        await registerPage.emailInput.fill(testData.userIncorrect.mailAddressFormat);
        await expect(registerPage.continueButton).toBeVisible();
        await registerPage.continueButton.click();
        await expect(registerPage.requiredMailAddressErrorMessage).toBeVisible()
        await expect(registerPage.requiredMailAddressErrorMessage).toContainText(EMAIL_ADDRESS_ERROR_MESSAGE);
    });

    test('Register - too short password', async ({ page }) => {
        await expect(page).toHaveURL('/index.php?route=account/register');
        await registerPage.passwordInput.fill(testData.userIncorrect.password)
        await registerPage.continueButton.click();
        await expect(registerPage.requiredPasswordErrorMessage).toBeVisible()
        await expect(registerPage.requiredPasswordErrorMessage).toContainText(REQUIRED_PASSWORD_ERROR_MESSAGE);
    });

    test('Register - confirm password does not match', async ({ page }) => {
        await expect(page).toHaveURL('/index.php?route=account/register');
        await registerPage.passwordInput.fill(testData.userIncorrect.password)
        await registerPage.continueButton.click();
        await expect(registerPage.confirmPasswordErrorMessage).toBeVisible()
        await expect(registerPage.confirmPasswordErrorMessage).toContainText(CONFIRM_PASSWORD_ERROR_MESSAGE);
    });

    test('Register - no agree privacy policy', async ({ page }) => {
        await expect(page).toHaveURL('/index.php?route=account/register');
        await registerPage.firstNameInput.fill(testData.userCorrect.firstName)
        await registerPage.lastNameInput.fill(testData.userCorrect.lastName)
        await registerPage.emailInput.fill(testData.userCorrect.mailAddress)
        await registerPage.telephoneNumberInput.fill(testData.userCorrect.phoneNumber)
        await registerPage.passwordInput.fill(testData.userCorrect.password)
        await registerPage.confirmPasswordInput.fill(testData.userCorrect.password)
        await registerPage.continueButton.click();
        await expect(registerPage.errorMessage).toBeVisible()
        await expect(registerPage.errorMessage).toContainText(PRIVACY_POLICY_AGREEMENTS_ERROR_MESSAGE);
    })

    test('Register - correct data and success', async ({ page }) => {
        await expect(page).toHaveURL('/index.php?route=account/register');
        await registerPage.firstNameInput.fill(testData.userCorrect.firstName)
        await registerPage.lastNameInput.fill(testData.userCorrect.lastName)
        await registerPage.emailInput.fill(randomEmail)
        await registerPage.telephoneNumberInput.fill(testData.userCorrect.phoneNumber)
        await registerPage.passwordInput.fill(testData.userCorrect.password)
        await registerPage.confirmPasswordInput.fill(testData.userCorrect.password)
        await registerPage.privacyPolicyCheckbox.click()
        await registerPage.continueButton.click();
        await expect(page).toHaveURL('/index.php?route=account/success')
        await expect(registerPage.successBreadCrumbLink).toBeVisible()
        await expect(registerPage.successBreadCrumbLink).toContainText('Success');
        await expect(loginPage.pageTitle).toContainText('Your Account Has Been Created!');
    })
});