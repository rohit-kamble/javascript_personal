function largestElement(arr){
    let element = arr[0];
    for(let i=0;i<arr.length;i++)
    {
        if(element < arr[i])
        {
            element = arr[i];
        }
    }
    return element;
}
console.log(largestElement([888,23,0,1,56,3,2,4,69]));