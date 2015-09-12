'use strict';

function Basket() {

    this.basketBooks = [0, 0, 0, 0, 0];
    this.bookVarity = 0;
    this.totalQuantity = 0;

}

Basket.prototype.addBook = function (books) {

    for (var i = 0; i < books.length; i++) {

        var book = books[i];

        if (book.type === 'first') {
            this.basketBooks[0]++;
            this.totalQuantity++;
        }

        if (book.type === 'second') {
            this.basketBooks[1]++;
            this.totalQuantity++;
        }

        if (book.type === 'third') {
            this.basketBooks[2]++;
            this.totalQuantity++;
        }

        if (book.type === 'fourth') {
            this.basketBooks[3]++;
            this.totalQuantity++;
        }

        if (book.type === 'fifth') {
            this.basketBooks[4]++;
            this.totalQuantity++;
        }
    }
};

Basket.prototype.updateVarity = function () {
    this.bookVarity = this.basketBooks.filter(function (quantity) {
        return quantity > 0;
    }).length;
};

Basket.prototype.isNull = function () {

    var temp = this.basketBooks.filter(function (quantity) {
        return quantity > 0;
    });

    if (temp.length === 0) {
        return true;
    }

};

Basket.prototype.reduceQuantity = function (quantity) {

    this.totalQuantity -= quantity;
    for (var i = 0; i < 5; i++) {
        if(this.basketBooks[i] > 0 && quantity > 0){
            this.basketBooks[i]--;
            quantity--;
        }
    }

};


module.exports = Basket;