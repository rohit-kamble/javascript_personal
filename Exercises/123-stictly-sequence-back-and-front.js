function strictlySeq(num)
{
    // let str = num.toString().split('');
    // console.log(str);
    for(let i=0;i<num.length;i++)
    {
        if(Math.abs(num[i]-num[i+1]) == 1)
        {
            return true;
        }
    }
    return false;
}
console.log(strictlySeq([-3,-2,-1]))