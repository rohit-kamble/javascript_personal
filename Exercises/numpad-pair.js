// let basealary = 30;
// let overtime = 20;
// let allowance = 10;


// const getSalary = (a, b, c) => {
// 	return a+b+c;
// }

// let customeObj = {
// 	ac: 10,
// 	bc: 20,
// 	dc: 40,
// 	getSal: function() {
// 		return this;
// 	},
// }

// customeObj = "rohi";
// const objResult = customeObj.getSal();
// const result = getSalary(basealary, overtime, allowance);
// console.log(customeObj);

const array = [-1,0,1,2,-1,-4];
let ar= []
let obj={
	"2" : "abc",
	"3" : "def",
	"4" : "ghi",
	"5" : "jkl",
	"6" : "mno",
	"7" : "pqrs",
	"8" : "tuv",
	"9" : "wxyz",
}

function SumPair(num) {
 	if(num.length <= 1 || num === "") {
		if(obj[num]) {
			return obj[num].split("")
		}
		else {
			return [];
		}
	}
	else {
		let setNew =[];
		let show = [];
		for(let i=0;i<num.length; i++){
			show.push(obj[num.charAt(i)]);
		}
		const newStr = show.sort((a,b)=> b.length - a.length);
		const [first, Second, third] = newStr;
		if(third) {
			for(let j=0; j<first.length; j++){
				for(let k=0; k<Second.length;k++){
					for(let z=0; z<third.length;z++){
						setNew.push(`${first.charAt(j)}${Second.charAt(k)}${third.charAt(z)}`)
					}
				}
			}
		}
		else {
			for(let j=0; j<first.length; j++){
				for(let k=0; k<Second.length;k++){
					setNew.push(`${first.charAt(j)}${Second.charAt(k)}`)
				}
			}
		}
		
		return setNew;
	}
}

console.log("==", SumPair("234"));