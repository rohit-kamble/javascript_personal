function roundendNumber(num)
{
    while (num % 10) {
        num++;
        console.log("num",num);
    }
    return num;
}
console.log(roundendNumber(62))