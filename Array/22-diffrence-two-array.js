function DiffTwoArrray(arr1,arr2){
    let d =[];
    for(let i in arr1){
        if(arr2.indexOf(arr1[i]) === -1){
            d.push(arr1[i])
        }
    }
    for(let j in arr2){
        if(arr1.indexOf(arr2[j]) === -1){
            d.push(arr2[j]);
        }
    }
    return d;
}
console.log(DiffTwoArrray([40,10,20],[10,20,40,50]));