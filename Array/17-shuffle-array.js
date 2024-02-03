function shuffle(arr){
    for(let i=0;i<arr.length;i++){
        let newIndex = Math.floor(Math.random() *  arr.length)
        let temp = arr[newIndex];
        arr[newIndex] = arr[i];
        arr[i] = temp;
    }
    return arr;
}
console.log(shuffle([2,3,4]))