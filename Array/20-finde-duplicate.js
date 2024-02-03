// function FindDuplicate(arr) {
//     var i,
//         len = arr.length,
//         out = [],
//         obj = {};
  
//     for (i = 0; i < len; i++) {
//         if(!obj[arr[i]])
//       obj[arr[i]] = 0;
//       obj[arr[i]] = obj[arr[i]] + 1;
//     }
//     for (i in obj) {
//      if(obj[i]>=2)
//      {
//         out.push(i)
//      }
      
//     }
//     return out;
//   }
// console.log(FindDuplicate([1,555,2,3,2,555]));
function findDuplicates(data) {

    let result = [];
  
    // data.forEach(function(element, index) {
      
    //   // Find if there is a duplicate or not
    //   if (data.indexOf(element, index + 1) > -1) {
        
    //     // Find if the element is already in the result array or not
    //     if (result.indexOf(element) === -1) {
    //       result.push(element);
    //     }
    //   }
    // });
    for(let i=0;i<data.length;i++){
        if(data.indexOf(data[i], i+1) === -1) {
            console.log("res=",result);
                   
                    // console.log("data[i]$=",data[i]);
          result.push(data[i]);
        
      }
        }
    
    return result;
  }
  
  console.log( findDuplicates([1, 2, 3, 1, 2, 1,2,2,2,2,2,]) ); // [1, 2]