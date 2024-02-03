function array_element_mode(arr) {
    // Sort the array 
    let d=arr.sort(); 
        
    // find the max frequency using linear 
    // traversal 
    let max_count = 1, res = arr[0]; 
    let curr_count = 1; 
      
    for (let i = 1; i < d.length; i++) 
    { 
        if (d[i] == d[i - 1]) 
            curr_count++; 
        // else 
        // { 
        //     if (curr_count > max_count) 
        //     { 
        //         max_count = curr_count; 
        //         res = d[i - 1]; 
        //     } 
        //     curr_count = 1; 
        // } 
    } 
  
    // If last element is most frequent 
    // if (curr_count > max_count) 
    // { 
    //     max_count = curr_count; 
    //     res = arr[n - 1]; 
    // } 
  
    return res; 
  }
  console.log(array_element_mode([2,54,68,54,56,54,54]))
  