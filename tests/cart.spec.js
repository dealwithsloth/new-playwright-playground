const { test, expect } = require('@playwright/test');
const { login, clearCart } = require('../utility/testCommands');
const { cartPageLink } = require('../pageObjects/cart');
const Cart = require('../pageObjects/cart');
const MyOrders = require('../pageObjects/myOrders');
const HomePage = require('../pageObjects/homePage');
const LoginPage = require('../pageObjects/loginPage');
const MyAccountSection = require('../pageObjects/myAccountSection');
const { addSomeProductToCart } = require('../utility/testCommands');

test.describe('Cart section tests', () => {
    let homePage;
    let loginPage;
    let myOrders;
    let myAccountSection;
    let cart;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        loginPage = new LoginPage(page);
        myAccountSection = new MyAccountSection(page);
        cart = new Cart(page);
        await page.goto('/');
        await login(page)
        await expect(page).toHaveURL(/.*account\/account/);
        await page.goto('/index.php?route=checkout/cart');
        await expect(page).toHaveURL(/.*cart/);
        await expect(loginPage.breadcrumbs).toBeVisible();
        await expect(loginPage.breadcrumbs).toContainText('Shopping Cart');
    });

    test('cart visibility', async ({ page }) => {
        await addSomeProductToCart(page, 1);
        cart = new Cart(page);
        myAccountSection = new MyAccountSection(page);
        await expect(cart.checkoutButton).toBeVisible();
        await cart.checkoutButton.scrollIntoViewIfNeeded();
        await cart.checkoutButton.click({ force: true });
    });

});