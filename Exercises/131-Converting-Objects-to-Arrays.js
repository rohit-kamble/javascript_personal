const obj = { shrimp: 15, tots: 12 };
function convertObhectToArray(obct) {
  const store = [];
  for (let ob in obct) {
    store.push([ob, obct[ob]]);
  }
  return store;
}
const ans = convertObhectToArray(obj);
console.log("---", ans);
