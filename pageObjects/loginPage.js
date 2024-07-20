class LoginPage {
    constructor(page) {
        this.page = page;
        this.breadcrumbs = page.locator('.breadcrumb');
        this.returningCustomerCardBody = page.locator('#content div:nth-of-type(2) .card-body');
        this.emailInput = page.locator('#input-email');
        this.passwordInput = page.locator('#input-password');
        this.errorMessage = page.locator('.alert-danger');
        this.pageTitle = page.locator('.page-title');
        this.logInButton = page.locator("//input[@class='btn btn-primary']");
        this.forgottenPasswordLink = page.locator("//a[.='Forgotten Password']");
    }
}

module.exports = LoginPage;