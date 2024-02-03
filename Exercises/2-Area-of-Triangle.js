// calculate Area of Triangle

const side1=5,side2=6,side3=7;
const sum=(side1+side2+side3)/2;
const area=Math.sqrt(sum*(sum-side1)*(sum-side2)*(sum-side3));
console.log("Area of Triangle",area);