'use strict';
var Book = require('./book');
var Basket = require('./basket');
var Discounter = require('./discounter');

var books = [
    new Book('first'),
    new Book('first'),
    new Book('first'),
    new Book('first'),
    new Book('second'),
    new Book('second'),
    new Book('second'),
    new Book('second'),
    new Book('third'),
    new Book('third'),
    new Book('third'),
    new Book('third'),
    new Book('fourth'),
    new Book('fourth'),
    new Book('fourth'),
    new Book('fifth')
];

    var basket = new Basket();
    basket.addBook(books);

    var discounter = new Discounter();
    var price = discounter.calculate(basket);

    console.log('优惠后书本价格共花费:'+price);


