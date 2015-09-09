'use strict';

function Basket() {

    this.basketBooks = [0, 0, 0, 0, 0];
    this.bookVarity = 0;
}

Basket.prototype.addBook = function (books) {

    for (var i = 0; i < books.length; i++) {

        var book = books[i];

        if (book.type === '001') {
            this.basketBooks[0]++;
        }

        if (book.type === '002') {
            this.basketBooks[1]++;
        }

        if (book.type === '003') {
            this.basketBooks[2]++;
        }

        if (book.type === '004') {
            this.basketBooks[3]++;
        }

        if (book.type === '005') {
            this.basketBooks[4]++;
        }
    }

    this.bookVarity = this.basketBooks.filter(function (number) {

        return number > 0;
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


module.exports = Basket;