// nothingIsNothing(0, false, undefined, null) ➞ false
// nothingIsNothing(33, "Hello",  true,  []) ➞ true
// nothingIsNothing(true, false) ➞ false

function nothingIsNothingt(...args) {
  return args.every((item) => item);
}

console.log("***", nothingIsNothingt(true, false));
