'use strict';

var Book = require('../src/book');

describe('Book', function () {

    var book;

    beforeEach(function () {
        book = new Book('001');
    });

    it("can new a book which type = '001' ", function () {

        expect(book.type).toBe('001');
    });

    it('can new a book which price = 8', function () {

        expect(book.price).toBe(8);
    });
});
