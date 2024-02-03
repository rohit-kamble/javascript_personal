function addOfArray(arr){
    if(arr.length == 1){
        return arr[0];
    }
    else {
        return arr.pop() + addOfArray(arr); 
    }
}
console.log(addOfArray([2,3,4]));