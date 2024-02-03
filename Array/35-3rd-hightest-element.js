function HighestElement(arr,n){
    let ele =arr[0];
    let d=[];
    let e=[];
    for(let i=0;i<arr.length;i++){
       if(ele< arr[i])
       {
           ele = arr[i];
       }
   }
   let j=0;
   let count = 0;
   while(count < n)
   {
    let ans = ele - j;
    if(arr.indexOf(ans) != -1)
    {
        count++;
        e.push(ans);
    }
    j++;
   }

   let index = arr.indexOf(e[e.length-1]);
   console.log("index",index);
   return e[e.length-1];	
}
console.log(HighestElement([150,117,16,38,5,120],3))