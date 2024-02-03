function absoultDiff(arrr){
    let result=0;
    for(let i=0;i<arrr.length - 1;i++)
    {
        result = result + Math.abs(arrr[i]-arrr[i+1]);
        console.log("result",result);
    }
    return result;
}

console.log(absoultDiff([2,2,-3,4]))
