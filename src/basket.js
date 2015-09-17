'use strict';

function Basket() {

    this.basketBooks = [];
}

Basket.prototype.addBook = function (books) {

    this.basketBooks = [0, 0, 0, 0, 0];

    for (var i = 0; i < books.length; i++) {

        var book = books[i];

        if (book.type === 'first') {
            this.basketBooks[0]++;
        }

        if (book.type === 'second') {
            this.basketBooks[1]++;
        }

        if (book.type === 'third') {
            this.basketBooks[2]++;
        }

        if (book.type === 'fourth') {
            this.basketBooks[3]++;
        }

        if (book.type === 'fifth') {
            this.basketBooks[4]++;
        }
    }
};

Basket.prototype.getVarity = function () {

    return this.basketBooks.filter(function (quantity) {
        return quantity > 0;
    }).length;
};

Basket.prototype.isNull = function () {

    var temp = this.basketBooks.filter(function (quantity) {
        return quantity > 0;
    });

    return temp.length === 0;
};

Basket.prototype.reduceQuantity = function (discountQuantity) {

    for (var i = 0; i < 5; i++) {
        if (this.basketBooks[i] > 0 && discountQuantity > 0) {
            this.basketBooks[i]--;
            discountQuantity--;
        }
    }
};

Basket.prototype.getTotalQuantity = function () {

    var totalQuantity = 0;
    this.basketBooks.forEach(function (quantity) {
        totalQuantity += quantity;
    });
    return totalQuantity;
};

module.exports = Basket;