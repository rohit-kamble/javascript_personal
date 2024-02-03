function checkEven(a) {
    // if(a == 0 || a == 1) {
    //     return `this is ${a==1?'not':''} even`;
    // }
    // else {
    //     return checkEven(a%2)
    // }
    if( a == 0 || a == -1) {
        return `this is${a == -1 ?' not':''} even`;
    }
    else {
        return checkEven(a-2); 
    }
}
console.log(checkEven(5));