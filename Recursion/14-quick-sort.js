function QuickSort(arr) {
    if(arr.length<=1){
        return arr;
    }
    else{
        let newArray=[];
        let pivot = arr.pop();
        let left = [];
        let right = [];
        for(let i=0;i<arr.length;i++){
            if(pivot > arr[i])
            {
                left.push(arr[i])
            }
            else {
                right.push(arr[i])
            }
        }
        return newArray.concat(QuickSort(left), pivot, QuickSort(right))

    }
}
console.log(QuickSort([98,10,33,4,50]))