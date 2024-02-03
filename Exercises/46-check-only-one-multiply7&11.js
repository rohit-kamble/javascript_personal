function multiplie(a,b){
   if((a%7 == 0 || a%11==0) && (b%7 ==0 || b%11==0))
   {
       return false;
   }
   else if((a%7 == 0 || a%11==0) && (b%7 != 0 || b%11 !=0 ))
   {
       return true
   }
   else if((b%7 == 0 || b%11==0) && (a%7 != 0 || a%11 !=0 ))
   {
       return true
   }
   else {
    return false;
   }
}

console.log(multiplie(12,11));