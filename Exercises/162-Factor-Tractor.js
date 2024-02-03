// primeFactorize(25) ➞ [5, 5]
// primeFactorize(19) ➞ [19]
// primeFactorize(77) ➞ [7, 11]

function primeFactorize(num) {
  for (let x = 2; x <= num; x++) {
    if (num % x === 0) {
      return primeFactorize(num / x) === undefined
        ? [x]
        : [x].concat(primeFactorize(num / x));
    }
  }
}
console.log("--", primeFactorize(19));
