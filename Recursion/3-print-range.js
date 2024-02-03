function printRange(a,b){
    if(b == a){
        return [b];
    }
    else {
        let list = printRange(a, b-1);
        list.push(b);
        return list;
    }
}
console.log(printRange(2,5));