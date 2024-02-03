function Array(arr){
    let d=[];
    let g=0;
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            if(arr[i]>arr[j]){
               g=arr[i];
            }
        }
    }
    for(let j=0;j<arr.length;j++){
        d.push(g);
    }
    return d;
}
let ans = 40;
[40,80,20,30].forEach((x)=>{
    if(x > ans) {
        ans = x;
    }
})
console.log("[40,80,20,30] large num is==", ans);

console.log(Array([30,40,70]))