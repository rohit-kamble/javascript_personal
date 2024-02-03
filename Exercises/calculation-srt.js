function CalSrqt(num) {
    // let count = 0;
    // let i =0;
    // while(count < 1){
    //     if(i*i == num) {
    //         count = 1;
    //         return i;
    //     }
    //     i++;
    // }
    if(num < 1){
        return 1;
    }
    else {
        console.log("hii")
        return num - CalSrqt(num/2);
    }
}
console.log(CalSrqt(16))