function sqrtFun(n,sqr) {
    if(sqr==0){
        return 1;
    }
    else {
        return n * sqrtFun(n, sqr - 1);
    }
}
console.log(sqrtFun(4,3));