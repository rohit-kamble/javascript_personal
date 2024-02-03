function rangeLeapYear(year1, year2)
{
    let d=[];
    for(let i=year1; i<=year2;i++)
    {
        if((i%4==0 && i%100!=0) || (i%100==0 && i%400 == 0))
        {
            d.push(i);
        }
    }
    return d;
}
console.log(rangeLeapYear(2000,2012))    