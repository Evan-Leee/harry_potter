'use strict';
var Discounter = require('../src/discounter');
var Basket = require('../src/basket');

describe('Discounter', function () {
    var basket, discounter;

    beforeEach(function () {
        basket = new Basket();
        discounter = new Discounter();
    });

    describe('.discount()', function () {

        it('can set the discountList for calculate', function () {
            basket.basketBooks = [2, 2, 2, 2, 2];//-->discountList=[0,0,0,0,2]
            discounter.discount(basket);
            expect(discounter.discountList.toString()).toBe('0,0,0,0,2');
        });
        it('can set the discountList for calculate', function () {
            basket.basketBooks = [0, 2, 1, 0, 2];//-->discountList=[0,1,1,0,0]
            discounter.discount(basket);
            expect(discounter.discountList.toString()).toBe('0,1,1,0,0');
        });
        it('when discountList[2],discountList[4] have value ,a pair of them will transfer to discountList[3]', function () {
            basket.basketBooks = [2, 2, 2, 1, 1];//-->discountList=[0,0,1,0,1]
            discounter.discount(basket);
            expect(discounter.discountList.toString()).toBe('0,0,0,2,0');
        });
        it('when discountList[2],discountList[4] have value ,a pair of them will transfer to discountList[3]', function () {
            basket.basketBooks = [4, 4, 4, 3, 1];//-->discountList=[0,0,1,2,1]
            discounter.discount(basket);
            expect(discounter.discountList.toString()).toBe('0,0,0,4,0');
        });
    });

    describe('.calculate()', function () {
        it('can calculate the total discount with the discountList', function () {
            spyOn(discounter, 'discount').and.callFake(function () {
                this.discountList = [0, 2, 4, 3, 0];
            });
            basket.totalQuantity = 28;
            var price = discounter.calculate(basket);

            expect(price).toBe(193.6);
        });
    });
});