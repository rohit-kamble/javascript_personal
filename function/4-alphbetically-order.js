alphabeticallyOrder = (str) =>{
    // return str.split('').sort().join('');
    let a=[];
    let d = str[0];
    for(let i=0;i<str.length;i++){
        if(str[i] < d){
            d=str[i];
        }
    }
    let test = str.length;
    let incr= 0;
    let j=0;
    while(incr < test)
    {
        let newAns = `${d}`.charCodeAt(0) + j;
        if(str.indexOf(`${String.fromCodePoint(newAns)}`) !== -1){
        a.push(String.fromCodePoint(newAns));
        incr++;
        } 
    j++;
    }
    return a.join('');
}
console.log(alphabeticallyOrder('rohit'))