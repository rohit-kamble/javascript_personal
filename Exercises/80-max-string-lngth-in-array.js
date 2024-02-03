function maxString(arr){
    // for(let i=0;i<arr.length;i++){
    //     for(let j=0;j<arr.length;j++){
    //         if(arr[i].length>arr[j].length){
    //             let temp = arr[i];
    //             arr[i]=arr[j];
    //             arr[j]=temp;
    //      }
    // }
    // }
    // return arr[0].length+" "+arr[0];
    
    
//     let max1 = 0;
//     let d=[];
//     for(let i=0;i<arr.length;i++){
//         max1 = Math.max(max1, arr[i].length);
//     }
//     for(let i=0;i<arr.length;i++){
//         if(max1 == arr[i].length){
//             d.push(arr[i]);
//         }
//     }
// return d;

let max = 0;
arr.map(v => max = Math.max(max, v.length));
result = arr.filter(v => v.length == max);
return result;
}
console.log("max-string",maxString(['ufvhoischggvb','dfc','fcfc','fcrcfr','crcrfcrc','ffr']));