// const Digitize = n => [...`${n}`].map(item=>parseInt(item));
const Digitize = n => n.toString().split('').map(item => parseInt(item));

console.log(Digitize(134));