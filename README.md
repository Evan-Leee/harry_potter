

-----------------------------------------------
basket中的basketBooks按下标存放1~5部书
discounter中的discountList按下标存放1本不同,2本不同,3本不同,4本不同,5本不同各有多少组
discounter中的standard按下标存放1本不同一组优惠多少钱,2本不同一组优惠多少钱,3本不同一组优惠多少钱...

先根据basket中的basketBooks里添加进去的书,然后用discount()按basket.bookVarity算出discountList的值,
有n种书就可以取出一组n本不同的组合,然后给discountList中下标是n-1的加1,如此循环,当basket.isNull()为true的时候,跳出循环,

将discountList中下标为2(3本不同)和4(5本不同)的成对替换成2组下标为3(4本不同)的,不成对的不替换,
然后让calculate()根据discountList和standard算出最终打折之后的价钱
