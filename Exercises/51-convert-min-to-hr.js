function minToHour(time){
    let a=(time%60);
    let b=Math.floor(time/60);
   return b+"hr "+a+" min";
}
console.log(minToHour(70));