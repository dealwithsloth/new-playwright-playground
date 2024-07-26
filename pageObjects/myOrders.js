class MyOrders {
    constructor(page) {
        this.page = page;
        this.orderIDColumn = page.locator('thead > tr > :nth-child(1)');
        this.customerColumn = page.locator('customerColumn');
        this.viewOrderButton = page.locator('.btn > .fa');
        this.reorderButton = page.locator('.fa-shopping-cart');
        this.returnButton = page.locator('.btn-danger');
        this.orderID = page.locator('#input-order-id');
        this.reasonForReturn = page.locator(':nth-child(5) > .col-sm-10 > :nth-child(1) > label');
        this.commentInput = page.locator('#input-comment');
        this.submitButton = page.locator('.float-right > .btn');
    }
}

module.exports = MyOrders;