function nestedArray(arr)
{
    console.log("object",arr.length);
    for(let i=0;i<arr.length;i++)
    {
        console.log("row",i)
        for(let j=0;j<arr[i].length;j++)
        {
            console.log(arr[i][j]);
        }
    }
}
console.log(nestedArray([[1,2,3],[4,5,6]]))