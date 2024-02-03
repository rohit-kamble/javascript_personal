// using charAt()

// function reverseString(str){
//     let newStr = "";
//     for(let i=str.length-1;i>=0;i--){
//         newStr = newStr + str.charAt(i);
//     }
//     return newStr;
// }

// using split()
// function reverseString(str){
//    let c = str.split('');
//    let d=[];
//    for(i=c.length-1;i>=0;i--){
//         d.push(c[i]);
//    }
//    return d.join('');
// }

// using substring

// function reverseString(str){
//     let d="";
//     for(let i=str.length;i>=0;i--){
//         d=d+str.substring(i,i-1);
//     }
//     return d;
// }

function reverseString(str){
    let d="";
    for(let i=str.length-1;i>=0;i--){
        d= d +str[i];
    }
    return d;
}
console.log(reverseString("raj"));