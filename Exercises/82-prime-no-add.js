function primeAdd(arr)
{
    // let a=0,b=0,d=[];
    // for(let i=0;i<arr.length;i++){
    //     if(i%2==0){
    //       a=a+arr[i];
    //     }
    //     else{
    //       b=b+arr[i];
    //     }
    // }
    // d.push(a,b);
    // return d;
    let a=0,b=0;
    let d=[];
    arr.forEach((item,i)=>{
        
        if(i%2==0){
            a=a+item;
        }
        else{
            b=b+item;
        }
    })
    d.push(a,b);
    return d;
}

console.log(primeAdd([1,2,3,4,5,6]))