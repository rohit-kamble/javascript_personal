function replaceCharCode(str)
{
    let i=0;
    let reult='';

    let d=str.split("");
    while(d.length>i){
        let n = d[i].charCodeAt()-'a'.charCodeAt();
        n = (n + 1) % 26;
        reult = reult + String.fromCharCode('a'.charCodeAt() + n)
        i++;
    }
    return reult;
}

console.log(replaceCharCode("rohit"))