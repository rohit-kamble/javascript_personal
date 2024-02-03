// doubleSwap( "aabbccc", "a", "b") ➞ "bbaaccc"

// doubleSwap("random w#rds writt&n h&r&", "#", "&")
// ➞ "random w&rds writt#n h#r#"

// doubleSwap("128 895 556 788 999", "8", "9")
// ➞ "129 985 556 799 888"

function doubleSwap(str, resplaceVal, val) {
  const newStr = str.split("");
  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i] === val) {
      newStr[i] = resplaceVal;
    } else if (newStr[i] === resplaceVal) {
      newStr[i] = val;
    } else {
    }
  }

  return newStr.join("");
}

console.log("ans=", doubleSwap("random w#rds writt&n h&r&", "#", "&"));
