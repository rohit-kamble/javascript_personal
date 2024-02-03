function posArray(arr,from, to) {
    let temp = arr[from];
    arr[from] = arr[to];
    arr[to] = temp;
    return arr;
}
console.log(posArray([2,3,5,6],1,2))