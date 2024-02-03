function is_inrange(digit) 
{ 
    let mid = digit[1];
    if(mid>digit[0] && mid<digit[2]) return true
    return false;
}
console.log(is_inrange([1,3,2]))