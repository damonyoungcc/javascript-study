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
foo(27);