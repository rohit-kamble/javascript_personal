function equal_pt(str)
{ 

let i=0;
let countP=0;
let countT=0
while(i<str.length){
    if(str[i] == 'p'){
        countP++;
    }
    if(str[i] == 't'){
        countT++;
    }
    i++;
}
if(countP == countT){
    return true
}
return false;
// return flag;
//   var str_p = str.replace(/[^p]/g, "");

//   var str_t = str.replace(/[^t]/g, "");

//   var p_num = str_p.length;
//   var s_num = str_t.length;

//   return p_num === s_num;
         
}
console.log(equal_pt("paatpsst"));
console.log(equal_pt("paatps"));
