'use strict';

var Basket = require('../src/basket');

describe('Basket',function(){

    var basket ;

    beforeEach(function(){
       basket = new Basket();
    });

    it('can new a basket which container has 0 book',function(){

        expect(basket.container).toBe([0,0,0,0,0])
    });

    describe('.addBook()',function(){

        it('can add the book to basket by the book.type',function(){

            var books = [
                new Book('001'),
                new Book('001'),
                new Book('001'),
                new Book('003'),
                new Book('003'),
                new Book('002')
            ];

            basket.addBook(books);

            expect(basket.container).toBe([3,1,2,0,0]);
        })

    });
});
