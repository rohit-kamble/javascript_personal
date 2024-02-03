function checkUpperCase(str){
    let newArr = str.split("");
    let x=0;
    let y=0;
    for(let i=0;i<newArr.length;i++){
        if(newArr[i].toUpperCase()==newArr[i])
        {
            x++;
        }
        else {
            y++;
        }
    }
    if(x>y){
        return newArr.join('').toString().toUpperCase();
    }
    else {
        return newArr.join('').toString().toLowerCase();
    }
}

console.log(checkUpperCase("ROhit"))
