// console.log('#'+(Math.random() * 0Xfffff * 1000000).toString(16).slice(0, 6));

const color= ()=>{
  const hash ="#";
  const random = Math.random() * 0Xfffff * 1000000;
  console.log("random===", random);
  return hash + random.toString(16).slice(0, 6);
}

console.log(color());