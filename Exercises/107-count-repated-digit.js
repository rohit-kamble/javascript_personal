function countRepeatedDigit(n){
    let arr = n.toString().split('');
    let count=0;
    for(let i=0;i<=arr.length-1;i++){
        if(arr[i]==arr[i+1]){
            count++;
        }
    }
    return count;
}
console.log(countRepeatedDigit(1111))