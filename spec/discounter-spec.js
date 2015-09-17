'use strict';
var Discounter = require('../src/discounter');
var Basket = require('../src/basket');

describe('Discounter', function () {

    var basket, discounter;

    beforeEach(function () {
        basket = new Basket();
        discounter = new Discounter();
    });

    describe('.calculate()', function () {

        it('when have 1 book in basket', function () {
            basket.basketBooks = [1, 0, 0, 0, 0];

            var price = discounter.calculate(basket);

            expect(price).toBe(8);
        });

        it('when have 2 same books in basket', function () {
            basket.basketBooks = [2, 0, 0, 0, 0];

            var price = discounter.calculate(basket);

            expect(price).toBe(16);
        });

        it('when have 5 same books in basket', function () {
            basket.basketBooks = [5, 0, 0, 0, 0];

            var price = discounter.calculate(basket);

            expect(price).toBe(40);
        });

        it('when have 2 different books in basket', function () {
            basket.basketBooks = [1, 1, 0, 0, 0];

            var price = discounter.calculate(basket);

            expect(price).toBe(15.2);
        });

        it('when have 3 different books in basket', function () {
            basket.basketBooks = [1, 1, 1, 0, 0];

            var price = discounter.calculate(basket);

            expect(price).toBe(21.6);
        });

        it('when have 5 different books in basket', function () {
            basket.basketBooks = [1, 1, 1, 1, 1];

            var price = discounter.calculate(basket);

            expect(price).toBe(30);
        });

        it('when have 8 book in basket[2,2,2,1,1]', function () {
            basket.basketBooks = [2, 2, 2, 1, 1];

            var price = discounter.calculate(basket);

            expect(price).toBe(51.2);
        });

        it('when have 16 book in basket[4,4,4,3,1]', function () {
            basket.basketBooks = [4, 4, 4, 3, 1];

            var price = discounter.calculate(basket);

            expect(price).toBe(102.4);
        });

        it('when have 32 book in basket[8,8,8,5,3]', function () {
            basket.basketBooks = [8, 8, 8, 5, 3];

            var price = discounter.calculate(basket);

            expect(price).toBe(204.8);
        });
    });

    describe('.optimizeDiscounts',function(){

        it('when discounts[2],discounts[4] have value ,a pair of them will transfer to discounts[3]',function(){
            discounter.discounts = [0,0,2,0,1];

            discounter.optimizeDiscounts();

            expect(discounter.discounts.toString()).toBe('0,0,1,2,0');
        });
    });

});