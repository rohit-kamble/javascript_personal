// Chainsbreak  => Chainsbreak
//                   ^---^
// check postion of  a---b

function checkAandB(str){
  let indexOfA = str.indexOf('a');
  let indexOfB = str.indexOf('b');
  if(Math.abs(indexOfA-indexOfB) == 4){
      return true;
  }
  return false;
}
console.log(checkAandB("Chainsbreak"))
console.log(checkAandB("pane borrowed"))