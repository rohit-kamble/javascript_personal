function input(input)
{
    if(toString.call(input)=="[object Array]")
    {
        return true;
    }
    return false;
}
console.log(input([1,2,3]))