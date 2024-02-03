// histogram([1, 3, 4], "#") ➞ "#\n###\n####"

// histogram([6, 2, 15, 3], "=") ➞ "======\n==\n===============\n==="

// histogram([1, 10], "+") ➞ "+\n++++++++++"

function histogram(arr, symbol) {
  for (let i = 0; i < arr.length; i++) {
    let str = "";
    for (let j = 0; j < arr[i]; j++) {
      str += symbol;
    }
    console.log(str, "");
  }
}

console.log("Ans=", histogram([1, 10], "+"));
