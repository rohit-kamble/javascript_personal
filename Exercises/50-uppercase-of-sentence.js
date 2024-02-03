function firstcharUpper(str){
    let a=str.split(" ");
    let sent ="";
    for(let i=0;i<a.length;i++){
        let f=a[i].charAt(0);
        sent =sent+ f.toUpperCase() + a[i].substring(1)+" ";
    }
    return sent;
}
console.log(firstcharUpper("this is bat"))