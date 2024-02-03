function rightMostDigit(a,b,c){
   return a%10 == b%10 && a%10 == c%10
}
console.log(rightMostDigit(245,34,54));