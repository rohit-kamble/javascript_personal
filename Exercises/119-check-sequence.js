function checkSequence(digit){
 let str = digit.toString().split('');
 let start = str[0];
 for (let index = 0; index < str.length; index++) {
    if(str[index]==start + i)
    {
        return true;
    }
 }
 return false
}
console.log(checkSequence())