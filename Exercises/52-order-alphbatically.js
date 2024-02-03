// without sort method

// function Order(str){
//     let d = str.split("");
//     for(let i=0;i<d.length;i++){
//         for(let j=i;j<d.length;j++){
//             if(d[i]>d[j])
//             {
//                 let temp = d[i];
//                 d[i]=d[j];
//                 d[j] =temp;
//             }
//         }
//     }
//     return d.join("");
// }

//using sort function

function Order(str){
    let d=str.split("").sort().join("");
    return d;
}
console.log("order",Order("rohit"))