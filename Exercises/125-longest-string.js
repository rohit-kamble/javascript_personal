// using two for loop

// function longestString(arr){
//     for(let i=0;i<arr.length;i++)
//     {
//         for(let j=0;j<arr.length;j++)
//         {
//             if(arr[i].length<arr[j].length)
//             {
//                 return arr[j];
//             }
//         }
//     }
// }


// using one for loop

function longestString(arra){
    var max_str = arra[0].length;
    var ans = arra[0];
    for (var i = 1; i < arra.length; i++) {
        var maxi = arra[i].length;
        if (maxi > max_str) {
            ans = arra[i];
            max_str = maxi;
        }
    }
    return ans;
}
console.log(longestString(['ranjana','raj','ranj','abc']));