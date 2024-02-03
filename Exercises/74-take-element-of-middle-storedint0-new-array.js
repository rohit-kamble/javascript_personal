function middleElement(a,b){
    const d=[];
    const a_middle=a[Math.floor(a.length/2)];
    const b_middle=b[Math.floor(b.length/2)];
    d.push(a_middle,b_middle);
    return d;
}

console.log(middleElement([3,5,6],[90,56,78]));
const data=[34,56,75,86];
console.log(data.indexOf(34) == -1);