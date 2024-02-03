function strinHalf(str){
    if(str.length % 2==0)
    {
        return str.substring(0, str.length/2);
    }
    return str;
}
console.log(strinHalf("rohite"));

console.log("Rohit =>","rohit".substring(1,"rohit".length -1));