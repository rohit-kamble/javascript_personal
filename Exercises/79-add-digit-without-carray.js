function add_two_int_without_carrying(n1, n2) {
    var result = 0,
        x = 1;
    while (n1 > 0 && n2 > 0) {
        result += x * ((n1 + n2) % 10);
        console.log("result", result)
        n1 = Math.floor(n1 / 10);
        console.log("n1",n1);
        n2 = Math.floor(n2 / 10);
        console.log("n2",n2);
        x*= 10;
        console.log("x",x)
    }
    return result;
}
console.log(add_two_int_without_carrying(222, 911))
// console.log(add_two_int_without_carrying(200, 900))