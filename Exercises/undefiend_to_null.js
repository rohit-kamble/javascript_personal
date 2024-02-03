let obj = {};
function undefinedToNull(arg) {
  if (typeof arg === "object") {
    // console.log("arg--", arg);
    for (let x in arg) {
      if (arg[x] === undefined) {
        obj[x] = null;
      } else if (Object.prototype.toString.apply(arg[x]) === "[object Array]") {
        let newArr = [];
        for (let y of arg[x]) {
          if (y === undefined) {
            newArr.push(null);
          } else {
            newArr.push(y);
          }
        }
        obj[x] = newArr;
      } else if (typeof arg[x] === "object") {
        console.log("***", arg[x]);
        obj[x] = arg[x];

        for (let i in arg[x]) {
          if (!obj || !obj.hasOwnProperty(arg[i])) {
            console.log(arg[x], "888");
            return undefinedToNull(arg[x]);
          } else {
            // obj[i] = arg[i];
            return undefinedToNull(arg[x]);
          }
        }

        // console.log("--", undefinedToNull(obj[x]));
      } else {
        obj[x] = arg[x];
        // obj[x] = { ...arg[x], ...obj[x] };s
      }
    }
  }
  return obj;
}

// console.log(undefinedToNull({ a: undefined, b: "BFE.dev" }));
// console.log(undefinedToNull({ a: ["BFE.dev", undefined, "bigfrontend.dev"] }));
console.log(
  "answer",
  undefinedToNull({
    b: { c: { d: undefined } },
  })
);
