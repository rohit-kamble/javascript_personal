function UnionArray(arr1,arr2){
    let obj={};
    let d=[];
    let test = arr1.concat(arr2);
    for(let i=0;i<test.length;i++){
        obj[test[i]] = i;      
    }
    for(let i in obj){
        d.push(i);
    }
    return d;
}
console.log(UnionArray([0,10,20],[10,20,30]))