// using sunstrig

// function addLast3Char(str){
//     return str.substring(str.length - 3).concat(str.substring(0,str.length-3));
// }

// using slice

// function addLast3Char(str){
//     return str.slice(str.length-3).concat(str.slice(0,str.length-3));
// }

// using splice

function addLast3Char(str){
    return str.split('').splice(0,3);
}
console.log(addLast3Char("123456"));