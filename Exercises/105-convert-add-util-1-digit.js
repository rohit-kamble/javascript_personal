function convbertOneDigit(digit)
{
    let str = digit.toString().split('');
    let ans=0;
    let count = 0;
    let newAns = 0;
    for(let i=0;i<str.length;i++){
        ans= ans + parseInt(str[i]);
    }
    if(Math.floor(ans/10)>0)
    {
        console.log("ans", ans)
        let data=ans.toString().split('');
        for(let j=0;j<data.length;j++)
        {
            newAns = newAns + parseInt(data[j]);
            ans = newAns;
        }

    }
    else {
        count ++;
    }
    return count;
}
console.log('ans', convbertOneDigit(74667892345621234543456));