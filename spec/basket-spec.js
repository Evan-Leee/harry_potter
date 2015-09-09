'use strict';

var Basket = require('../src/basket');
var Book = require('../src/book');

describe('Basket', function () {

    var basket;

    beforeEach(function () {
        basket = new Basket();
    });

    it('can new a basket which container has 0 book', function () {

        expect(basket.basketBooks.toString()).toBe('0,0,0,0,0');
    });

    describe('.addBook()', function () {

        it('can add the book to basket by the book.type', function () {
            var books = [
                new Book('001'),
                new Book('001'),
                new Book('003'),
                new Book('003'),
                new Book('002')
            ];

            basket.addBook(books);
            expect(basket.basketBooks.toString()).toBe('2,1,2,0,0');
        });

    });

    describe('.summarize()', function () {

        beforeEach(function(){
            var books = [
                new Book('001'),
                new Book('001'),
                new Book('003'),
                new Book('003'),
                new Book('002'),
                new Book('004'),
                new Book('005')
            ];

            basket.addBook(books);
            basket.summarize();
        });

        it('can give bookVarity a value', function () {
            expect(basket.bookVarity).toBe(5);
        });

        it('can give count a value',function(){
            expect(basket.count).toBe(3);
        })
    });

    describe('.isNull()', function () {

        it('can return a true when basket is null', function () {
            expect(basket.isNull()).toBe(true);
        });

        it('can return a false when basket has book', function () {
            var books = [
                new Book('001'),
                new Book('001'),
                new Book('001'),
                new Book('003'),
                new Book('003'),
                new Book('002')
            ];

            basket.addBook(books);
            expect(basket.isNull()).toBe(undefined);
        });
    });
});
