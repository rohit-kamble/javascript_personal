function AdditionOfTwoArray(arr1, arr2){
    let length = arr1.length> arr2.length ? arr1.length : arr2.length;
    let sum = 0;
    let d=[];
    for(let i=0;i< length;i++){
        // sum = (arr1[i] == undefined ? 0: arr1[i]) + (arr2[i]== undefined ? 0: arr2[i]);
        sum = (arr1.indexOf(arr1[i]) == -1 ? 0: arr1[i]) + (arr2.indexOf(arr2[i])==-1?0:arr2[i]);
        d.push(sum);
    }
    return d;
}
console.log(AdditionOfTwoArray([1,2,3,4,5,6,7],[1,2,3,4,5]))