function swapStringFisrtAndStart(str){
    let a= str.charAt(0);
    let b= str.charAt(str.length - 1);
    let c= str.substring(1,str.length - 1);
    return b+c+a;
}
console.log(swapStringFisrtAndStart("rohit"));