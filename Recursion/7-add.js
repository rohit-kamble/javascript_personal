function add(a,b){
    if(a==0){
        return b;
    }
    else {
        return 1 + add(a - 1, b);
    }
}
console.log(add(5,3));