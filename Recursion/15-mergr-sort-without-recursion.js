function mergeSortWithoutRecursion(arr){
    let mid = Math.floor((arr.length-1)/2);
    let left = arr.slice(0,mid+1);
    let right = arr.slice(mid+1,arr.length);
    let newLeft = [];
    
    // for(let i=0;i<left.length;i++){
    //     for(let j=0;j<left.length;j++)
    //     {
    //         if(left[i]<left[j]){
    //             let temp = left[i];
    //             left[i] = left[j];
    //             left[j] = temp;
    //         }
    //     }
    // }
    
    // for(let i=0;i<right.length;i++){
    //     for(let j=0;j<right.length;j++)
    //     {
    //         if(right[i]<right[j]){
    //             let temp = left[i];
    //             left[i] = left[j];
    //             left[j] = temp;
    //         }
    //     }
    // }
    
    // if(left[0] < right[0]){
    //     return left.concat(right)
    // }
    // else {
    //     return right.concat(left)
    // }
    let newArr= [];
    let j=0;
    let c=0;
    let minValue = arr[0];
    while (c<=arr.length) {
        if(minValue < arr[c]){
            minValue = arr[c]
        }
        c++;
    }
    return minValue;   
}
console.log(mergeSortWithoutRecursion([8,10,5,2,56]));