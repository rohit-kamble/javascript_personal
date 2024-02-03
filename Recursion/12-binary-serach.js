function BinarySearch(arr,start, end ,key) {
    let mid = Math.floor((start + end)/ 2);
    if(start > end) {
        return "not found";
    }
    if(arr[mid] == key) {
        return "element found";
    }
    else if(arr[mid] < key) {
        return BinarySearch(arr, start + 1, end, key)
    }
    else if(arr[mid] > key) {
        return BinarySearch(arr,start, end - 1, key)
    }

}
const arr =[1,3,5,6,7];
console.log(BinarySearch(arr,start =0,end=arr.length -1 ,7));