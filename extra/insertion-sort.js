function insertionSort(arr) {
    for(let i=0;i<arr.length;i++){
        
        for(let j=i;j>0;j--){
            if(arr[j-1]>arr[j]){
                let temp = arr[j];
                arr[j] =arr[j-1];
                arr[j-1] = temp;
            }
        }

    }
    return arr;
}

console.log(insertionSort([4,8,2,1,5]));
