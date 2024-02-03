color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];

o = ["th", "st", "nd", "rd"];

var count = 1;
for(var i = 0; i < color.length; i++){
if(count <= 3){
console.log(count + o[count] + " choice is " + color[i]);
count++;
}
else{
console.log(count + o[0] + " choice is " + color[i])
count++;
}
}