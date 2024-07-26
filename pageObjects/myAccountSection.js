class MyAccountSection {
    constructor(page) {
        this.page = page;
        this.myAccountContent = page.locator('#account-account');
        this.myAccountCard = page.locator('#content > div:nth-of-type(1) > .card-header');
        this.myOrdersCard = page.locator('#content > div:nth-of-type(2) > .card-header');
        this.myAffiliateAccountCard = page.locator('#content > div:nth-of-type(3) > .card-header');
        this.myAccountRightColumn = page.locator('#column-right');
        this.editAccountInformationLink = page.locator("//a[contains(.,'Edit your account information')]");
        this.changeYourPasswordLink = page.locator("//a[contains(.,'Change your password')]");
        this.addressBookLink = page.locator("//a[contains(.,'Modify your address book entries')]");
        this.wishListLink = page.locator("//a[contains(.,'Modify your wish list')]");
        this.newsletterOptionsLink = page.locator("//a[contains(.,'Subscribe / unsubscribe to newsletter')]");
        this.orderHistoryLink = page.locator("//a[contains(.,'View your order history')]");
        this.downloadsLink = page.locator("//div[@id='content']//a[contains(.,'Downloads')]");
        this.rewardPointsLink = page.locator("//a[contains(.,'Your Reward Points')]");
        this.returnRequestsHistoryLink = page.locator("//a[contains(.,'View your return requests')]");
        this.yourTransactionsLink = page.locator("//a[contains(.,'Your Transactions')]");
        this.recurringPaymentsLink = page.locator("//div[6]/a[contains(.,'Recurring payments')]");
        this.registerForAffiliateLink = page.locator('.m-3');
        this.rightColumnLogoutLink = page.locator('.fa-sign-out-alt');
        this.rightColumnActiveTab = page.locator('.list-group-item active');
        this.newsletterNoRadio = page.locator("[for='input-newsletter-no']");
        this.newsletterYesRadio = page.locator("[for='input-newsletter-yes']");
    }
}

module.exports = MyAccountSection;