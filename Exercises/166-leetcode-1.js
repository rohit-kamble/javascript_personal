function isMatchString(s, p) {
  let obj = {};
  let flag = false;
  for (let i = 0; i < s.length; i++) {
    obj[s.charAt(i)] = p.charAt(i);
  }
  const allKeys = Object.keys(obj);
  for (let j = 0; j < allKeys.length; j++) {
    if (allKeys[j] === obj[allKeys[j]] || obj[allKeys[j]] === "?") {
      flag = true;
      console.log("==", allKeys[j]);
    }
  }
  console.log("==", flag);
}
console.log(isMatchString("acdcb", "a*c?b"));
