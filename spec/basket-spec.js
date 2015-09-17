'use strict';

var Basket = require('../src/basket');
var Book = require('../src/book');

describe('Basket', function () {

    var basket;

    beforeEach(function () {
        basket = new Basket();
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

    });

    describe('.getVarity()', function () {

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

        });

        it('should return the varity of book in basket', function () {
            expect(basket.getVarity()).toBe(5);
        });

    });

    describe('.isNull()', function () {

        it('can return true when basket is null', function () {
            expect(basket.isNull()).toBe(true);
        });

        it('can return false when basket has book', function () {
            var books = [
                new Book('first'),
                new Book('first'),
                new Book('first'),
                new Book('third'),
                new Book('third'),
                new Book('second')
            ];

            basket.addBook(books);
            expect(basket.isNull()).toBe(false);
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

            var previous = basket.getTotalQuantity();
            basket.reduceQuantity(2);
            var current = basket.getTotalQuantity();
            expect(previous !== current).toBe(true);
        });

        it('should update the basketBooks when the quantity changed',function(){
            basket.reduceQuantity(3);
            expect(basket.basketBooks.toString()).toBe('2,0,1,0,0');
        })
    });
});
