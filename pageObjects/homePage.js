class HomePage {
    constructor(page) {
        this.page = page;
        this.myAccountDropdown = page.locator('.fa-user.icon');
        this.loginButton = page.locator("//span[contains(.,'Login')]");
        this.logoutButton = page.locator("//span[contains(.,'Logout')]");
    }
}

module.exports = HomePage;