function movePosArra(arr, move, pos){
   const del = arr.splice(move,1);
    arr.splice(pos,0,parseInt(del.join("")));
    return arr;
}
console.log(movePosArra([10,20,30,50], 0, 3))     