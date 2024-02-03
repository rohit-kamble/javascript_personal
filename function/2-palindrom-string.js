palindromString = (data) => 
 { 
     let newstr;
     let str;
    if(typeof(data) == 'number'){
        newstr = data.toString();
    } 
    
    str = newstr ? newstr : data;
    for(let i=0;i<str.length;i++) {

        if(str[str.length-(i+1)] == str[i] && i != str.length-(i+1) ) {
            return 'palindrom string';
        }
    }
    return 'not palindrom String';
 }
 console.log(palindromString(12321));