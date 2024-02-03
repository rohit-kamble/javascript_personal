function chcekTowString(str1,str2){
    for(let i=0;i<str2.length;i++){
        if(str1.indexOf(str2.charAt(i)) == -1){
            return false;
        }
    }
    return true;
}
console.log(chcekTowString("roht","torhrp"))