// sum of n+n/2+n/4...
function int_sum(num) {
    var s_sum = 0;
    while (num > 0) {
        s_sum += num;
        num = Math.floor(num / 2);
    }
    return s_sum;
    // let sum=0;
    // for(let i=0;i<=num;i++)
    // {
    //     sum = sum+num;
    //     num = Math.floor(num/2);
    //     console.log("num",num);
    // }
    // return sum;
}
console.log(int_sum(8))