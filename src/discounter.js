'use strict';

var Basket = require('./basket');
var DISCOUNT_STANDARD = require('./../seed/discount-standard');
var ORIGINAL_PRICE = 8;

function Discounter() {

    this.discounts = [];
}

Discounter.prototype.calculate = function (basket) {

    var totalDiscount = ORIGINAL_PRICE * basket.getTotalQuantity();
    this.discounts = [0, 0, 0, 0, 0];

    while (!basket.isNull()) {
        var varity = basket.getVarity();
        this.discounts[varity - 1]++;
        basket.reduceQuantity(varity);
    }

    this.optimizeDiscounts();

    for (var i = 0; i < this.discounts.length; i++) {
        totalDiscount -= this.discounts[i] * DISCOUNT_STANDARD[i];
    }

    return totalDiscount;
};

Discounter.prototype.optimizeDiscounts = function () {

    var min = Math.min(this.discounts[2], this.discounts[4]);
    this.discounts[2] -= min;
    this.discounts[3] += 2 * min;
    this.discounts[4] -= min;
};

module.exports = Discounter;