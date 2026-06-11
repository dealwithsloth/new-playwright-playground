const { expect } = require('@playwright/test');
const testData = require('../fixtures/test.data.json');
const RegisterPage = require('../pageObjects/registerPage');
const MyAccountSection = require('../pageObjects/myAccountSection');
const Cart = require('../pageObjects/cart');
const LoginPage = require('../pageObjects/loginPage');
const ProductPage = require('../pageObjects/productPage');

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

async function clearCart(page) {
  const cart = new Cart(page);
  const loginPage = new LoginPage(page);

  await cart.cartPageLink();
  await expect(loginPage.pageTitle).toBeVisible();
  await expect(loginPage.pageTitle).toContainText('Shopping Cart');
  await expect(cart.deleteFromCartButton).toBeVisible();
  await cart.deleteFromCartButton.click();
  await expect(cart.emptyCartContent).toBeVisible();
  await expect(cart.emptyCartContent).toContainText('Your shopping cart is empty!');
}

async function addSomeProductToCart(page) {
  const productPage = new ProductPage(page);

    await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=product/product&path=17&product_id=47');
    await expect(productPage.availabilityBadgeInStock).toBeVisible();
    await expect(productPage.availabilityBadgePreOrder).not.toBeVisible();
    await expect(productPage.addToCartButton).toBeVisible();
    await productPage.addToCartButton.click();
    await expect(productPage.successMessageBody).toBeVisible();
    await expect(productPage.successMessageBody).toContainText('Success: You have added');
  }


module.exports = { login, clearCart, addSomeProductToCart };