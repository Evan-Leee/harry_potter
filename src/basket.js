'use strict';

function Basket() {

    this.container = [0, 0, 0, 0, 0];
}

Basket.prototype.addBook = function (books) {

    for(var i = 0; i < books.length; i++){

        var book = books[i];

        if(book.type === '001'){
            this.container[0]++;
        }

        if(book.type === '002'){
            this.container[1]++;
        }

        if(book.type === '003'){
            this.container[2]++;
        }

        if(book.type === '004'){
            this.container[3]++;
        }

        if(book.type === '005'){
            this.container[4]++;
        }
    }

};


module.exports = Basket;