'use strict';

var Basket = require('./basket');
var ORIGINAL_PRICE = 8;

function Discounter() {
    this.total = 0;
    this.STANDARD = [0, 0.8, 2.4, 6.4, 10];
    this.discounts = [0, 0, 0, 0, 0];
}

Discounter.prototype.calculate = function (basket) {

    var totalPrice = ORIGINAL_PRICE * basket.getTotalQuantity();

    while (!basket.isNull()) {
        var varity = basket.getVarity();
        this.discounts[varity - 1]++;
        basket.reduceQuantity(varity);
    }

    this.optimizeDiscounts();

    for(var i = 0; i < this.discounts.length; i++){
        this.total += this.discounts[i] * this.STANDARD[i];
    }

    totalPrice -= this.total;
    return totalPrice;
};

Discounter.prototype.optimizeDiscounts = function(){

    var min = Math.min(this.discounts[2],this.discounts[4]);
    this.discounts[2] -= min;
    this.discounts[3] += 2 * min;
    this.discounts[4] -= min;
};

module.exports = Discounter;