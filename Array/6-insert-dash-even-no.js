function evenDash(input){
    // let d=[];
    // for(let i=0;i<arr.length;i++)
    // {
    //     if(arr[i]%2==0)
    //     {
    //         let e = "-"+arr[i];
    //         d.push(parseInt(e))
    //     }
    //     else {
    //         d.push(arr[i])
    //     }
    // }
    // return d;

    // for(let i=0;i<arr.length;i++)
    // {
    //     if(arr[i]%2==0)
    //     {
    //         arr[i] = parseInt("-"+arr[i]);
    //     }
    // }
    // return arr;

    let str = input.toString().split('');
    for(let i=1;i<str.length;i++)
    {
        if((str[i-1]%2 === 0)&&(str[i]%2 === 0))
     {
        str[i] = '-'+str[i];
     }
    else
     {
        str[i] = str[i];
     }
    }
    return str.join('');
}
console.log(evenDash(1302574698)) 