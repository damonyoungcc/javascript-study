function fn(arg1, arg2, callback) {
    var num = Math.ceil(Math.random() * (arg1 - arg2) + arg2);
    callback(num);
}
fn(10, 20, function (num) {
    console.log("Callback called! Num: " + num);
});
