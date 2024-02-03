function addDigit(digit){
    let converString = digit.toString();
    let i=0;
    let total=0;
    while(i<converString.length){
        total=total+parseInt(converString[i]);
        i++;
    }
    return total;
}
console.log(addDigit(89));