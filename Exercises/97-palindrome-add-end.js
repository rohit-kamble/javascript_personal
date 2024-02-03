function palindromeString(str)
{
    let d= str.split("");
    const nesArr = [];
    let index=[];
    let flag=false;
    let lastValue = d[d.length-1];
    for(let i=0;i<d.length;i++){
        if(d[i] == lastValue && i!== d.length-1){
            index.push(i);
            flag=true;
        }
    }
    for(let j=(flag?index[0]-1:d.length);j>=0;j--)
    {
        nesArr.push(d[j])
    }
    console.log("j",flag)
   return [...d,...nesArr].join('');
}
console.log(palindromeString('abccb'));
