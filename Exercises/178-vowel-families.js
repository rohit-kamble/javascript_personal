function vowelFamilies(arr) {
  const vowel = { a: "a", e: "e", i: "i", o: "o", u: "u" };
  const g = [];
  for (let x of arr) {
    console.log(x);
    let ans = {};
    let newStr = "";
    for (let i in x) {
      if (ans[x[i]]) {
        if (vowel[x[i]]) {
          ans[x[i]] = ans[x[i]] + 1;
          newStr += x[i];
        }
      } else {
        if (vowel[x[i]]) {
          ans[x[i]] = 1;
          newStr += x[i];
        }
      }
    }
    console.log("ll", newStr);
  }
}
vowelFamilies(["toe", "ocelot", "maniac"]);
