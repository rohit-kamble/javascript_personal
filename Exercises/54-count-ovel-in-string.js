function CountOvel(str){
    let flag=0;
    for(let i=0;i<str.length;i++){
        if(str[i]=='a'|| str[i]=='o'||str[i]=='u'||str[i]=='i'||str[i]=='e'){
            flag++;
        }
    }
    return flag;
//  with regx 
//   return str.replace(/[^aeiou]/g, "").length; 
}

function countOvel(name){
    let n=0;
    name.split('').forEach(element => {
        console.log("element", element)
        if(element.toLowerCase() === 'a' ||
        element.toLowerCase() === 'o' ||
        element.toLowerCase() === 'u' ||
        element.toLowerCase() === 'i' ||
        element.toLowerCase() === 'e') {
            n++
        }
    });
    console.log('count==', n);
}
countOvel("rohit");
console.log(CountOvel("w3resource.com"));