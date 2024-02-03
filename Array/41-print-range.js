function printRange(from, to){
    let d=[];

    while(from <= to){
        d.push(from);
        from++;
    }
    return d;
}
console.log(printRange(-1,3));