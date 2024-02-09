// function ConvertThousand(num) {
//     let str = num.toString();
//     let arr = str.split('');
//     let newArr= [];
//     let result= [];
//     let i= arr.length -1;
//     let k= 0;
//     while(i>=0){
//         if(k==3){
//             newArr.push(',');
//         }
//         else if((k+1)%2==0 && k>3){
//             newArr.push(',')
//         }
//         if(k==0){
//             newArr.push('.');
//         }
//         newArr.push(arr[i])
//         i--;
//         k++;
//     }
//     for(let j=newArr.length -1;j>=0;j--){
//         result.push(newArr[j])
//     }
//     return result.join('');
// }
function ConvertThousand(num) {
  const convertToStr = num + "";
  const test = convertToStr.split("").reverse();
  const addComma = [];
  let flag = true;
  if (convertToStr.length <= 3) {
    return num.toString();
  } else {
    test.forEach((x, i) => {
      if (flag && i === 2) {
        addComma.push(x);
        addComma.push(",");
        flag = false;
      } else if (!flag && i % 2 === 0) {
        addComma.push(x);
        addComma.push(",");
      } else {
        addComma.push(x);
      }
    });
  }
  const final = addComma.reverse();
  if (final[0] === ",") {
    final.shift();
  }
  console.log("addComma==", final.join(""));
}
ConvertThousand(100000);
