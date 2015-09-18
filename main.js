'use strict';

var Basket = require('./src/basket');
var Discounter = require('./src/discounter');
var books = require('./seed/books');

var basket = new Basket();
basket.addBook(books);

var discounter = new Discounter();
var price = discounter.calculate(basket);

console.log('优惠后书本价格共花费:' + price);


