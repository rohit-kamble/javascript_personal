  function columnSum(ar, num) {
  let count = 0;
  let obj = {};
  while (count < num) {
    let tottal = 0;
    for (let i = 0; i < ar.length; i++) {
      if (i % num === 0) {
        tottal += ar[i];
      }
    }
    obj[count + 1] = tottal;
    ar.shift();
    count++;
  }
  console.log("==", obj);
  let max = obj[1];
  let idx = 1;
  for (let x in obj) {
    if (max < obj[x]) {
      max = obj[x];
      idx = x;
      
    }
  }
  return idx;
}
const ar = [5, 9, 12, 12, 7];
let num = 5;
// Test.assertEquals(colWithMaxSum([14, 9, 19, 6, 13, 13, 3, 2, 12], 3), 3)
// Test.assertEquals(colWithMaxSum([1, 13, 15, 5, 16, 1, 4, 9, 20], 3), 2)
// Test.assertEquals(colWithMaxSum([15, 4, 6, 10, 6, 4], 2), 1)
// Test.assertEquals(colWithMaxSum([7, 9, 13, 16, 17, 1, 10, 6, 3, 19, 6, 10, 8, 18, 20, 4], 8), 7)
// Test.assertEquals(colWithMaxSum([4, 18, 14, 16, 7, 7, 20, 14, 9, 4, 8, 16, 1, 12, 18, 13], 2), 2)
// Test.assertEquals(colWithMaxSum([5, 7, 2, 12, 20, 7, 1, 12, 8, 7, 12, 8], 3), 2)
// Test.assertEquals(colWithMaxSum([18, 16, 6, 4, 18, 20, 9, 8, 1, 14, 20, 16], 4), 2)
// Test.assertEquals(colWithMaxSum([5, 4, 20, 8, 8, 18], 2), 1)
// Test.assertEquals(colWithMaxSum([2, 9, 12, 9, 17, 6, 8, 9, 8, 18, 2, 4], 2), 2)
// Test.assertEquals(colWithMaxSum([15, 2, 16, 19, 3, 1, 15, 13, 19, 16, 2, 16], 3), 1)
// Test.assertEquals(colWithMaxSum([4, 6, 18, 13, 19, 2, 7, 13, 19, 16, 12, 20, 17, 12, 4, 7], 8), 5)
// Test.assertEquals(colWithMaxSum([10, 8, 6, 2, 2, 2, 18, 17, 17, 20, 17, 17], 6), 1)
// Test.assertEquals(colWithMaxSum([3, 9, 14, 7, 6, 13, 9, 10, 1, 5, 10, 17, 16, 6, 3, 18], 4), 4)
// Test.assertEquals(colWithMaxSum([2, 7, 8, 17, 15, 3], 3), 2)
// Test.assertEquals(colWithMaxSum([8, 8, 6, 4, 8, 16, 4, 16, 18, 20, 20, 7], 2), 2)
// Test.assertEquals(colWithMaxSum([19, 15, 1, 10, 2, 8], 6), 1)
// Test.assertEquals(colWithMaxSum([5, 20, 8, 3, 5, 15], 3), 2)
// Test.assertEquals(colWithMaxSum([10, 12, 15, 14, 17, 4, 18, 12, 17, 18, 18, 12], 4), 3)
// Test.assertEquals(colWithMaxSum([5, 9, 12, 12, 7], 5), 3)
// Test.assertEquals(colWithMaxSum([3, 18, 8, 15, 9, 15, 12, 8, 11, 5, 10, 8], 6), 2)

console.log(columnSum(ar, num));
