function chckString(str){
    for(let i=0;i<str.length;i++){
        let a= str.charAt(0) == "P" ? true : "P";
        let b= str.charAt(1) == "y"? true :"y";

        if(a == true && b==true){
            return str;
        }
        else {
            return a+b+str;
        }
    }
}

console.log("string", chckString("raj"));