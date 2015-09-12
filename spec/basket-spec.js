'use strict';

var Basket = require('../src/basket');
var Book = require('../src/book');

describe('Basket', function () {

    var basket;

    beforeEach(function () {
        basket = new Basket();
    });

    it('can new a basket which container has 0 book', function () {

        expect(basket.totalQuantity).toBe(0);
    });

    describe('.addBook()', function () {

        beforeEach(function () {
            var books = [
                new Book('first'),
                new Book('first'),
                new Book('second'),
                new Book('third'),
                new Book('third')
            ];

            basket.addBook(books);
        });

        it('can add the book to basket by the book.type', function () {
            expect(basket.basketBooks.toString()).toBe('2,1,2,0,0');
        });

        it('can give totalQuantity a value', function () {
            expect(basket.totalQuantity).toBe(5);
        });

    });

    describe('.updateVarity()', function () {

        beforeEach(function () {
            var books = [
                new Book('first'),
                new Book('first'),
                new Book('third'),
                new Book('third'),
                new Book('second'),
                new Book('fourth'),
                new Book('fifth')
            ];

            basket.addBook(books);
            basket.updateVarity();
        });

        it('can give bookVarity a value', function () {
            expect(basket.bookVarity).toBe(5);
        });

    });

    describe('.isNull()', function () {

        it('can return a true when basket is null', function () {
            expect(basket.isNull()).toBe(true);
        });

        it('can return a false when basket has book', function () {
            var books = [
                new Book('first'),
                new Book('first'),
                new Book('first'),
                new Book('third'),
                new Book('third'),
                new Book('second')
            ];

            basket.addBook(books);
            expect(basket.isNull()).toBe(undefined);
        });
    });

    describe('.reduceQuantity()', function () {
        beforeEach(function(){
            var books = [
                new Book('first'),
                new Book('first'),
                new Book('first'),
                new Book('third'),
                new Book('third'),
                new Book('second')
            ];

            basket.addBook(books);
        });

        it('can update the totalQuantity when the quantity need to be reduced', function () {

            var previous = basket.totalQuantity;
            basket.reduceQuantity(2);
            var current = basket.totalQuantity;
            expect(previous !== current).toBe(true);
        });

        it('should update the basketBooks when the quantity changed',function(){
            basket.reduceQuantity(3);
            expect(basket.basketBooks.toString()).toBe('2,0,1,0,0');
        })
    });
});
