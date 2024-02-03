function minus(a,b){
    if(a==0){
        return b;
    }
    else {
        return minus(a-1, b) - 1;
    }
}
console.log(Math.abs(minus(2,10)));