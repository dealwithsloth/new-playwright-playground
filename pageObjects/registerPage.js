class RegisterPage {
    constructor(page) {
        this.page = page;
        this.firstNameInput = page.locator('#input-firstname');
        this.lastNameInput = page.locator('#input-lastname');
        this.emailInput = page.locator('#input-email');
        this.telephoneNumberInput = page.locator('#input-telephone');
        this.passwordInput = page.locator('#input-password');
        this.confirmPasswordInput = page.locator('#input-confirm');
        this.newsletterYesLabel = page.locator("[for='input-newsletter-yes']");
        this.newsletterNoLabel = page.locator("[for='input-newsletter-no']");
        this.privacyPolicyCheckbox = page.locator('.custom-checkbox');
        this.continueButton = page.locator("//input[@class='btn btn-primary']");
        this.errorMessage = page.locator('.alert-danger');
        this.requiredFirstNameErrorMessage = page.locator('#account > div:nth-of-type(2) .text-danger');
        this.requiredLastNameErrorMessage = page.locator('#account > div:nth-of-type(3) .text-danger');
        this.requiredMailAddressErrorMessage = page.locator('#account > div:nth-of-type(4) .text-danger');
        this.requiredPhoneNumberErrorMessage = page.locator('#account > div:nth-of-type(5) .text-danger');
        this.requiredPasswordErrorMessage = page.locator('fieldset:nth-of-type(2) > div:nth-of-type(1) .text-danger');
        this.confirmPasswordErrorMessage = page.locator('fieldset:nth-of-type(2) > div:nth-of-type(2) .text-danger');
        this.accountBreadCrumbLink = page.locator("//a[.='Account']");
        this.successBreadCrumbLink = page.locator("//li[@class='breadcrumb-item active']")
    }
}

module.exports = RegisterPage;