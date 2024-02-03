function PrintDigit(num){
    let zero = false;
    let one =  false;
    let k = 0;
    let eight= false;
    while (k <2) {
        for(let i=0;i<1;i++){
            one ? eight ? console.log(" "): console.log(" _") : '';
            // console.log(" _");
            for(let j=0;j<1;j++){
                process.stdout.write("|");
                process.stdout.write(" ");
                
            }
            eight= true;
            zero= !zero;
            console.log(" ");
            one ? zero ? process.stdout.write(" ") : process.stdout.write(" -"): '';
        }
        k++;
    }
    
}
console.log(PrintDigit())