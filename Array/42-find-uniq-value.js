function findUniqueValue(arr1,arr2){
    let d = [];
    let flat1 = arr1.flat(Infinity);
    let flat2 = arr2.flat(Infinity);
    for(let i=0;i<flat2.length;i++){
        let index = flat1.indexOf(flat2[i]) !== -1;
            if(!index){
                d.push(flat2[i]);
            }
    }
    return [...flat1, ...d];
}
console.log(findUniqueValue([1, 2, 3, 40, 5], [1, [3, [[4,8]]],[5]]))