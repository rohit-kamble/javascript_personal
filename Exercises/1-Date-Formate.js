// Write a JavaScript program to get the current date.
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

const today= new Date();
let day= today.getDate();
let month = today.getMonth();
const year = today.getFullYear();

if(day<10){
    day="0"+day;
}
if(month<10){
    month="0"+month;
}

console.log("mm-dd-yyyy=",month+"-"+day+"-"+year);
console.log("mm/dd/yyyy=",month+"/"+day+"/"+year);
console.log("dd-mm-yyyy=",day+"-"+month+"-"+year);
console.log("dd/mm/yyyy=",day+"/"+month+"/"+year);