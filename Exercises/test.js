// function closerFun() {
//   for (var i = 0; i < 5; i++) {
//     function inner(a) {
//       setTimeout(() => {
//         console.log(a);
//       }, 100);
//     }
//     inner(i);
//   }
// }
// closerFun();

// function closer(fun) {
//   let obj = {};
//   return function (func) {
//     if (obj[fun]) {
//       return obj[fun];
//     } else {
//       let a = 5,
//         b = 6;
//       return fun(a, b);
//     }
//   };
// }

const filterM = (data) => {
  let newArra = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i] > 2) {
      newArra.push(data[i]);
    }
  }
  return newArra;
};

const arr = {
  data: [1, 2, 3, 5],
  filterMethod: function (filterM) {
    return filterM(this.data);
  },
};

const call = arr.filterMethod(filterM);
console.log(call);
