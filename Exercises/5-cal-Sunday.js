const rr = new Date();

function calSunday(from, to){
	for(let i=from;i<=to;i++){
			let date = new Date(i, 0 , 1);
			if(date.getDay() === 0){
					console.log("1st being sunday",i)
			}
	}
}

calSunday(2014, 2050);