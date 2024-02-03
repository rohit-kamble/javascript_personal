// function BinaryConvertor(n) {
//   let b = 0;
//   const t= n;
//   var r, i=1;
//   while(n!=0) {
//     r = n % 2;
//     n = parseInt(n / 2);
//     b= b +( r * i);
//     i = i * 10;

//   }
//   console.log("Decimal=", t," Binary=", b)
// }

// function HexaConvertor(n) {
//   const data= [0,1,2,3,4,5,6,7,8,9,'A','B','C','D', 'E', 'F'];
//   let r =0, ans = '';
//   while(n>0) {
//       r = n % 16;
//       ans= ans + data[r];
//       n= parseInt(n/16);
//   }
// console.log("ans**", ans);
// }

// function OctaConvertor(n) {
//   // const octa;
//   // console.log("octa**", octa);
//   let i=0, arr=[100], octa,ans =0;
//   while(n !=0) {
//     arr[i] = n % 8;
//     n= parseInt(octa/8);

//     i++;
//     console.log("octa**", octa);
//     console.log("n***", n);
//   }
//   ans = ans + octa ;
//   console.log("ans*", ans)
// }

// // HexaConvertor(4);
// OctaConvertor(12)
function x(n,m) {
  function add(d,k) {
    return d + k;
  }
  function sub(d,k) {
    return d - k;
  }
  function mul(d, k) {
    return d * k;
  }
  function div(d,k) {
    return d/k
  }
  return "Additon ="+ parseInt( add(m ,n)) + "";
}

var d = x(2,3);
console.log("d",d);