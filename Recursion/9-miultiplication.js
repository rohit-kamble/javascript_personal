function mul(a,b){
    if(b == 0){
        return 0;
    }
    else {
       return a + mul(a, b-1);
    }
}
console.log(mul(2,2));