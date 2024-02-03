function diffAdjFindMax(arr){
    // let d=[];
    // for(let i=0;i<arr.length-1;i++){
    //     let ans=arr[i]-arr[i+1];
    //     d.push(Math.abs(ans));
    // }
    // const max= Math.max(...d);
    // return max;
    let max=0;
    for(let i=0;i<arr.length-1;i++)
    {
        let ans=arr[i]-arr[i+1];
        max=Math.max(max, Math.abs(ans));
    }
    return max;
}

console.log(diffAdjFindMax([1,-2,3,8,9]));