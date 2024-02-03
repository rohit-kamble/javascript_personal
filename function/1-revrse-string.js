reverseString = (str) => 
 {
     let d=[];
    for(let i=str.length -1;i>=0;i--) {
        d.push(str[i]);
    }
    return d.join('');
 }
 console.log(reverseString("rohit"));