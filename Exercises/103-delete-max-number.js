function deleteMaxDigit(digit)
{
    let str= digit.toString().split('');
    if(digit%10 == 0)
    {
        str.pop();
        return str.join('').toString();
    }
    else{
        str.shift();
        return str.join('').toString();
    }
}
console.log(deleteMaxDigit(1245))
