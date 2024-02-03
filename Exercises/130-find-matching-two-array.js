// const a=['1','2','3'] b=['2','4','5'] 
// output ['2'];

const a=['1','2','3','6', '5'], b=['2','4','5']

const ans=[];
function mathingValue(arr1, arr2) {
    const longArr = arr1.length > arr2.length ? arr1 : arr2;
    const sortArr = arr1.length < arr2.length ? arr1 : arr2;
    for(let x of longArr) {
        console.log('sort=', sortArr, 'x=', x, "check", sortArr.indexOf(x))
        if(sortArr.indexOf(x) !== -1){
            ans.push(x);
        }
    }
    return ans;
}
console.log("ans ", mathingValue(a, b));

// const a= ['1','2','3', '4', '2']; remove duplicate array
// output a =['1', '2','3','4']
// const arr =['1','2','3', '4', '2', '2'];
// function removedDuplicate(arr) {
//     let obj={}
//     for(let x of arr) {
//         obj[x] = x;
//     }
//     return Object.keys(obj);
// }

// console.log('ans ', removedDuplicate(arr))