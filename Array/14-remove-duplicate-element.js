function removeDuplicate(arr){
  const result = [];
  let idx = 0;
  const tmp = {};
  for(let i=0;i<arr.length;i++){
    if(!tmp[arr[i]])
    {
      tmp[arr[i]]=2;
      result[idx]=arr[i];
      idx++;
    }
  }
  return result;
}
console.log(removeDuplicate([1,3,2,2,2,2,7]))