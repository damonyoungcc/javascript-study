function foo(num) {
    while (num != 1) {
        if (num % 2 === 0) {
            num = num / 2
            console.log(num);
        } else {
            num = num * 3 + 1;
            console.log(num);
        }
    }
}
// foo(1357911);

//参数运算符


function sum(...rest) {
    return rest.reduce(function (x, y) {
        return x + y;
    })
}
console.log(sum(1, 2, 3, 4, 5, 6))

console.log([1, 2, 3, 4, 5, 6, 7].reduce((x, y) => {
    return x + y;
}))
