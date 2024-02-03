function preFilled(length, data){
    let arr=[];
    for(let i=0;i<length;i++){
        arr.push(data);
    }
    return arr;
}

console.log(preFilled(6,0));