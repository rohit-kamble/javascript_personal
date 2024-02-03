combinationString = (str)=>{
    let d= [];
    for(let i=0;i<str.length;i++){
        let ans = '';
        for(let j=i;j<str.length;j++){
            ans = ans + str[j];
            d.push(ans);
        }
    }
    return d;
}
console.log(combinationString('dog'))