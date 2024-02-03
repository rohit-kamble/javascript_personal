const arr=[1,2,3,8,9,10,12,13,14];
for(var i = 1; i < arr.length; i++) {
    if(arr[i] - arr[i-1] != 1) {
        console.log(arr[0]+"-"+(arr[i - 1]))
        break;
    }
}
