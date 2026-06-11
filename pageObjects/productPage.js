class ProductPage {
    constructor(page) {
        this.page = page;
        this.addToWishListButton = page.locator('.thumbnail-left .btn');
        this.goToWishListButton = page.locator("//a[contains(.,'Wish List')]");
        this.availabilityBadgeInStock = page.locator('.badge-success');
        this.availabilityBadgePreOrder = page.locator('.badge-danger');
        this.price = page.locator('.price-new');
        this.priceInformation = page.locator('.price-info > .far');
        this.priceTooltip = page.locator('.popover-body');
        this.quantityInputField = page.locator("//div[@class='entry-col col-12 flex-wrap flex-sm-nowrap']//input[@name='quantity']");
        this.minusButton = page.locator('#entry_216841 > .input-group > .input-group-prepend > .btn > .fas');
        this.plusButton = page.locator('#entry_216841 > .input-group > .input-group-append > .btn > .fas');
        this.addToCartButton = page.locator('.order-lg-1 > .text');
        this.buyNowButton = page.locator('.btn-buynow');
        this.compareProductButton = page.locator('.btn-sm');
        this.proceedToCompareListButton = page.locator('.toast-body > .btn');
        this.compareProductCheckMark = page.locator('.btn-sm .fa-check');
        this.successMessageBody = page.locator('.toast-body');
        this.successMessageTitle = page.locator('.toast-header');
        this.successMessageCloseButton = page.locator("//span[.='×']");
        this.successMessageGoToCartButton = page.locator('.form-row .btn-primary');
        this.successMessageGoToCheckoutButton = page.locator('.form-row .btn-secondary');
        this.successMessageCartLink = page.locator("//a[.='shopping cart']");
        this.askQuestionButton = page.locator('.fa-question-circle.icon');
        this.askQuestionContentBody = page.locator('.modal-md .modal-body');
        this.askQuestionHeader = page.locator('.modal-header');
        this.askQuestionNameInput = page.locator("[placeholder='Your name']");
        this.askQuestionMailInput = page.locator("[placeholder='Your email']");
        this.askQuestionSubjectInput = page.locator("[name='subject']");
        this.askQuestionMessageInput = page.locator("[name='message']");
        this.askQuestionSendButton = page.locator("//button[@class='btn btn-secondary btn-lg']");
        this.askQuestionNameErrorMessage = page.locator(':nth-child(1) > .error');
        this.askQuestionEmailErrorMessage = page.locator(':nth-child(2) > .error');
        this.askQuestionSubjectErrorMessage = page.locator(':nth-child(3) > .error');
        this.askQuestionMessageErrorMessage = page.locator(':nth-child(4) > .error');
        this.reviewRatingGroup = page.locator('.select-rating');
        this.reviewRatingFiveStars = page.locator('[for="rating-5-216860"]');
        this.reviewSuccessMessage = page.locator('#form-review > .alert');
        this.reviewNameInput = page.locator('#input-name');
        this.reviewMessageInput = page.locator('#input-review');
        this.reviewSendButton = page.locator('#button-review');
        this.faqFirstTab = page.locator('#mz-faq-label-216863-0');
        this.faqFourthTab = page.locator('#mz-faq-label-216863-3');
        this.faqFirstTabContent = page.locator('#mz-faq-panel-216863-0 > .card-body > p');
        this.faqFourthTabContent = page.locator('#mz-faq-panel-216863-3 > .card-body > p');
        this.faqWidgetTitle = page.locator('.widget-title');
        this.goToTopButton = page.locator('#back-to-top > .fas');
        this.descriptionTab = page.locator("[href='#mz-design-tab-216814-0']");
        this.descriptionTabContent = page.locator('#mz-design-tab-216814-0 > .entry-content > :nth-child(1)');
        this.reviewsTab = page.locator("[href='#mz-design-tab-216814-2']");
        this.reviewsTabContent = page.locator('#mz-design-tab-216814-2 > .entry-content > .review');
        this.customTab = page.locator("//a[contains(.,'Custom')]");
        this.customTabContent = page.locator('#mz-design-tab-216814-3');
        this.productMainPicture = page.locator('#image-gallery-216811 > .image-thumb > .thumbnail > .img-fluid');
        this.openedPicture = page.locator('.mfp-img');
        this.rightNavigationArrow = page.locator('.mfp-arrow-right');
        this.leftNavigationArrow = page.locator('.mfp-arrow-left');
        this.pictureCounter = page.locator('.mfp-counter');
        this.productOpenedPictureCloseButton = page.locator('.mfp-close');
        this.thirdPictureThumbnail = page.locator('.swiper-slide-next > .thumbnail > img');
        this.productVariantSelect = page.locator("[data-id='216836'] .custom-select");
        this.productVariantErrorMessage = page.locator("[data-id='216836'] .text-danger");
    }

    async simpleProductPage() {
        await this.page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=47');
    }

    async configurableProductPage() {
        await this.page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=product/product&path=20&product_id=68');
    }
}

module.exports = ProductPage;