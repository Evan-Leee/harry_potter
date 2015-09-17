'use strict';

function Basket() {

    this.basketBooks = [0, 0, 0, 0, 0];
}

Basket.prototype.addBook = function (books) {

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
    var bookVarity = this.basketBooks.filter(function (quantity) {
        return quantity > 0;
    }).length;

    return bookVarity;
};

Basket.prototype.isNull = function () {

    var temp = this.basketBooks.filter(function (quantity) {
        return quantity > 0;
    });

    if (temp.length === 0) {
        return true;
    } else {
        return false;
    }

};

Basket.prototype.reduceQuantity = function (quantity) {

    for (var i = 0; i < 5; i++) {
        if (this.basketBooks[i] > 0 && quantity > 0) {
            this.basketBooks[i]--;
            quantity--;
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