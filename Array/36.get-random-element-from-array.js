function getRandomEle(arr){
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
}
console.log(getRandomEle([1,2,3,5,77,80,90]))