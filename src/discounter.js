'use strict';
var _ = require('lodash');
var Basket = require('./basket');

function Discounter() {
    this.total = 0;
    this.standard = [0, 0.8, 2.4, 6.4, 10];
    this.discountList = [0, 0, 0, 0, 0];
}

Discounter.prototype.calculate = function (basket) {

    var totalPrice = 8 * basket.totalQuantity;

    this.discount(basket);

    for(var i = 0; i < this.discountList.length; i++){
        this.total += this.discountList[i] * this.standard[i];
    }

    totalPrice -= this.total;
    return totalPrice;
};

Discounter.prototype.discount = function (basket) {

    while (!basket.isNull()) {
        basket.updateVarity();
        this.discountList[basket.bookVarity - 1]++;
        basket.reduceQuantity(basket.bookVarity);
    }

    var min = Math.min(this.discountList[2],this.discountList[4]);
    this.discountList[2] -= min;
    this.discountList[3] += 2 * min;
    this.discountList[4] -= min;
};


module.exports = Discounter;