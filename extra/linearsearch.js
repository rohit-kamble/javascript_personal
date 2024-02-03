function LinearSearch(Arr, n){
    for(let i=0;i<Arr.length;i++){
        if(Arr[i] == n){
            return true;
        }
    }
}
const Arr=[3,45, ,6,7,8,0];
console.log(LinearSearch(Arr, 3));
function iterativeFunction(arr, x) { 
   
    let start=0, end=arr.length-1; 
          
    // Iterate while start not meets end 
    while (start<=end){ 
  
        // Find the mid index 
        let mid=Math.floor((start + end)/2); 
   
        // If element is present at mid, return True 
        if (arr[mid]===x) return true; 
  
        // Else look in left or right half accordingly 
        else if (arr[mid] < x)  {
            start = mid + 1; 
             console.log("start", start);
        }
             
        else
       
             end = mid - 1; 
             console.log("end",end)
    } 
   
    return arr; 
}
console.log(iterativeFunction([8,9,'a','d'], 'd'))