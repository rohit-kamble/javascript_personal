function sumdiff(a,b){
    return (a==15 || b==15) || (a+b==15)||(Math.abs(a-b)==15);
}
console.log(sumdiff(20,5));