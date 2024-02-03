// num_of_digits(1000) ➞ 4
// num_of_digits(12) ➞ 2
// num_of_digits(1305981031) ➞ 10
// num_of_digits(0) ➞ 1

function num_of_digits(num) {
  return num.toString().length;
}

console.log("ans=", num_of_digits(12));
