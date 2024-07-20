class MyAccountSection {
    constructor(page) {
        this.page = page;
        this.myAccountContent = page.locator('#account-account');
    }
}

module.exports = MyAccountSection;