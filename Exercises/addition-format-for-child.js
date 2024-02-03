function simpleAdditionForChild(numbers){
  for(let i=0; i<5;i++){
    const num1  = Math.floor(Math.random() * (i+ 1));
    const num2 = Math.floor(Math.random() * (numbers))
    if(num1 !== num2) {
      console.log("",  num1 ,"+ ", num2, " = ", num1 + num2 );
    }
  }
}

simpleAdditionForChild(10);