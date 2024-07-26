class Cart {
    constructor(page) {
        this.page = page;
        this.orderIDColumn = page.locator('thead > tr > :nth-child(1)');
        this.productPhoto = page.locator(':nth-child(1) > .text-center > a > .img-thumbnail');
        this.productName = page.locator('form > .table-responsive > .table > tbody > :nth-child(1) > :nth-child(2) > a');
        this.cartQuantityInputField = page.locator(':nth-child(1) > :nth-child(4) > .input-group > .form-control');
        this.checkoutButton = page.locator("//a[.='Checkout']");
        this.continueShoppingButton = page.locator("//a[.='Continue Shopping']");
        this.updateCartQuantityButton = page.locator('.input-group-append > .btn-primary > .fas');
        this.deleteFromCartButton = page.locator('.fa-times-circle');
        this.useCouponCodeCollapse = page.locator("[data-target='#collapse-coupon']");
        this.couponCodeInputField = page.locator('#input-coupon');
        this.applyCouponCodeButton = page.locator('#button-coupon');
        this.estimateShippingCollapse = page.locator("[data-target='#collapse-shipping']");
        this.countrySelectErrorMessage = page.locator(':nth-child(1) > .col-md-9 > .invalid-feedback');
        this.getQuotesButon = page.locator('#button-quote');
        this.useGiftCodeCollapse = page.locator("[data-target='#collapse-voucher']");
        this.giftCodeInput = page.locator('#input-voucher');
        this.giftCodeButton = page.locator('#button-voucher');
        this.shippingMethods = page.locator('#modal-shipping .modal-content');
        this.singleShippingMethod = page.locator('.form-check > label');
        this.cancelButton = page.locator('.btn btn-light');
        this.applyShippingButton = page.locator('#button-shipping');
        this.shippingCost = page.locator('.m-0.table tr:nth-of-type(2) > td:nth-of-type(2)');
        this.erorMessageCloseButton = page.locator('.alert > .close');
        this.emptyCartContent = page.locator('#content');
    }

    async cartPageLink() {
        await this.page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=checkout/cart');
    }
}

module.exports = Cart;