function calEvenNo(n){
    let count=0;
    for(let i=0;i<=n;i++){
        if(i%2==0){
            console.log("even=",i);
            count++;
        }
    }
    return count;
}
console.log(calEvenNo(7))