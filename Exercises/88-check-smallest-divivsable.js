function ar(a)
{
   const small =Math.min(...a);
    for(let i=0;i<a.length;i++){
        if(a[i]%small !== 0){
            console.log('a[i]',a[i]);
        return false;
        }
    }
    return true;
}
console.log("ans",ar([12,17,4]))