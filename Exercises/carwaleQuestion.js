// function sequenceBreak(arr)
// {
//     let d=[];
//     let index= 0;
//     for(let i=0;i<arr.length;i++)
//     {
//         if( Math.abs(arr[i]-arr[i+1])!=1)
//         {
//             d.push(arr[index]+","+arr[i]);
//             index=i+1;
//         }
//     }
    
//     return d;
// }

function sequenceBreak(num){
    const d=[];
    let index= 0;
    num.forEach((x, i) => {
        if(Math.abs(x - num[i+1]) !== 1){
            d.push(num[index]+"-"+x)
            index = i + 1;
        }
    });
    return d;
}
console.log(sequenceBreak([1,2,3,4,16,17,18,25,26,27,28,29,30,8,9,10,10001,10002,10003,10004]))