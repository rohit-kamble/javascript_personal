function division(a,b){
    if(a == 0 || a == 1 || a == 2){
        return b;
    }
    else {
        console.log("a%b = ",Math.floor(a % b))
        return a / division(a % b, b);
    }
}
console.log(division(9,2));
console.log("div",1600%160);
