function matrix(arr){
  for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length;j++)
    {
      if(arr[i][j] !=0)
      {
        return true;
      }
    }
  }     
  return false;
}
console.log(matrix([[1,0,0],[0,1,0],[0,0,1]]));