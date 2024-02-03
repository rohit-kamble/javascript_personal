function binary_Search(items, value){
  var firstIndex  = 0,
      lastIndex   = items.length - 1,
      middleIndex = Math.floor((lastIndex + firstIndex)/2);

  for(let i=firstIndex;i < lastIndex; i++)
  {
     if (value < items[middleIndex])
      {
          lastIndex = middleIndex - 1;
      } 
    else if (value > items[middleIndex])
      {
          firstIndex = middleIndex + 1;
      }
      middleIndex = Math.floor((lastIndex + firstIndex)/2);
  }

return middleIndex;
}
var items = [1, 2, 3, 4, 5, 7, 8];
console.log(binary_Search(items, 4));   
console.log(binary_Search(items, 5));