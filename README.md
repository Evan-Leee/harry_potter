To try and encourage more sales of the 5 different Harry Potter books they sell, a bookshop has decided to offer discounts of multiple-book purchases.

One copy of any of the five books costs 8 EUR.

If, however, you buy two different books, you get a 5% discount on those two books.

If you buy 3 different books, you get a 10% discount.

If you buy 4 different books, you get a 20% discount.

If you go the whole hog, and buy all 5, you get a huge 25% discount.

Note that if you buy, say, four books, of which 3 are different titles, you get a 10% discount on the 3 that form part of a set, but the fourth book still costs 8 EUR.

Your mission is to write a piece of code to calculate the price of any conceivable shopping basket (containing only Harry Potter books), giving as big a discount as possible.

For example, how much does this basket of books cost?

2 copies of the first book
2 copies of the second book
2 copies of the third book
1 copy of the fourth book
1 copy of the fifth book
One way of group these 8 books is:

 1 group of 5 --> 25% discount (1st,2nd,3rd,4th,5th)
+1 group of 3 --> 10% discount (1st,2nd,3rd)
This would give a total of

 5 books at a 25% discount
+3 books at a 10% discount
Giving

 5 x (8 - 2.00) == 5 x 6.00 == 30.00
+3 x (8 - 0.80) == 3 x 7.20 == 21.60
For a total of 51.60

However, a different way to group these 8 books is:

 1 group of 4 books --> 20% discount  (1st,2nd,3rd,4th)
+1 group of 4 books --> 20% discount  (1st,2nd,3rd,5th)
This would give a total of

 4 books at a 20% discount
+4 books at a 20% discount
Giving

 4 x (8-1.60) == 4 x 6.40 == 25.60
+4 x (8-1.60) == 4 x 6.40 == 25.60
For a total of 51.20

And 51.20 is the price with the biggest discount.

-----------------------------------------------
basket中的basketBooks按下标存放1~5部书
discounter中的discountList按下标存放1本不同,2本不同,3本不同,4本不同,5本不同各有多少组
discounter中的standard按下标存放1本不同一组优惠多少钱,2本不同一组优惠多少钱,3本不同一组优惠多少钱...

先根据basket中的basketBooks里添加进去的书,然后用discount()按basket.bookVarity算出discountList的值,
有n种书就可以取出一组n本不同的组合,然后给discountList中下标是n-1的加1,如此循环,当basket.isNull()为true的时候,跳出循环,

将discountList中下标为2(3本不同)和4(5本不同)的成对替换成2组下标为3(4本不同)的,不成对的不替换,
然后让calculate()根据discountList和standard算出最终打折之后的价钱
