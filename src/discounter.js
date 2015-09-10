'use strict';

function Discounter() {
    this.standard = [0, 0.4, 0.8, 1.6, 2];
    this.total = 0;
}

Discounter.prototype.calculate = function () {
    //TODO: calculate the total discount
};

Discounter.prototype.discount = function (bookVarity, count) {
    //TODO: discount each group
};