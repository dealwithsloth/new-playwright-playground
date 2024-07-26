const { test, expect } = require('@playwright/test');
const { login, clearCart } = require('../utility/testCommands');
const Cart = require('../pageObjects/cart');
const MyOrders = require('../pageObjects/myOrders');
const HomePage = require('../pageObjects/homePage');
const LoginPage = require('../pageObjects/loginPage');
const MyAccountSection = require('../pageObjects/myAccountSection');

test.describe('My Orders section tests', () => {
    let homePage;
    let loginPage;
    let myOrders;
    let myAccountSection;
    let cart;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        loginPage = new LoginPage(page);
        myAccountSection = new MyAccountSection(page);
        myOrders = new MyOrders(page);
        cart = new Cart(page);

        await login(page)
    });

    test('My Orders cards visibility', async () => {
        await expect(myAccountSection.orderHistoryLink).toBeVisible();
        await expect(myAccountSection.downloadsLink).toBeVisible();
        await expect(myAccountSection.rewardPointsLink).toBeVisible();
        await expect(myAccountSection.returnRequestsHistoryLink).toBeVisible();
        await expect(myAccountSection.yourTransactionsLink).toBeVisible();
        await expect(myAccountSection.recurringPaymentsLink).toBeVisible();
    });

    test('Order history', async ({ page }) => {
        await expect(myAccountSection.orderHistoryLink).toBeVisible();
        await myAccountSection.orderHistoryLink.click();
        await expect(loginPage.pageTitle).toBeVisible();
        await expect(loginPage.pageTitle).toHaveText('Order History');
        await expect(myOrders.orderIDColumn).toBeVisible();
        await expect(myOrders.orderIDColumn).toHaveText('Order ID');
        await myOrders.viewOrderButton.first().click();
        await expect(loginPage.pageTitle).toBeVisible();
        await expect(loginPage.pageTitle).toHaveText('Order History');
        await myOrders.reorderButton.first().click();
        await expect(homePage.successMessage).toBeVisible();
        await expect(homePage.successMessage).toContainText('Success: You have added');
        await myOrders.returnButton.first().click();
        await expect(loginPage.pageTitle).toContainText('Product Returns');
        await myOrders.reasonForReturn.click();
        await myOrders.commentInput.type('Test comment');
        await myOrders.submitButton.click();
        await expect(loginPage.pageTitle).toContainText('Product Returns');
        await clearCart(page);
    })

});