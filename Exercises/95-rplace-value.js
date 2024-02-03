function replaceValue(arr,value,replaceValues)
{
    for(let i=0;i<arr.length;i++){
        if(arr[i] == value)
        {
            arr[i]=replaceValues ;
        }
    }
    return arr;

}
console.log(replaceValue([1,2,5,6,3,2],2,8))