function largestEven(arr){
    let  start=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==0)
        {
            // if(start < arr[i])
            // {
            //     start = arr[i]
            // }
            start++;
        }
    }
    return start;
}
console.log(largestEven([2,3,4,12,10,20,5,8,6,9]))