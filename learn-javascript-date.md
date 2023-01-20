# Epoch time (or Unix timestamp in milliseconds) made simple

Q. What is epoch time? Ans. **Basically the number of milliseconds since midnight, 1970-01-01.**

```js
// Unix timestamp in milliseconds
k = Date.now() // 1674254700963

// making 
dateObject = new Date(k)

// date object to epoch time
l = dateObject.getTime() // 1674254700963
l === k
true
```


# My other gist of javascript date testings

[Click here](https://gist.github.com/sahilrajput03/07de36ab5fd8c180b6ca6d125ac552a8)
