function leapYear(year) {
    if(((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)){
        return console.log("leap year", year);
    }
    else {
        return console.log("not leap year",year);
    }
}

leapYear(2020);
leapYear(2000);
leapYear(2017);
leapYear(2016);
leapYear(100);
