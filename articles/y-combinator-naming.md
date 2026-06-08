# **Why `y combinator` named `y combinator`?**

2025 (Source: [ChatGPT](https://chatgpt.com/c/68d916d2-02b4-8325-8d9d-626cdbb34c52)) *(The Y cominator problem)*

 ```js
const Y = fun => {
    const f = x => {
        return fun(v => {
            return x(x)(v);
        });
    };

    return (f)(f);
};

// Factorial
const factorial = Y(recursiveFun => {
    return n => {
        // Note: `n` is a variable that represents the position (or index)
        //          of a term in the sequence.
        return n === 0 ? 1 : n * recursiveFun(n - 1);
    };
});

console.log(factorial(5)); // 120
```
