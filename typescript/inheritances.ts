class a {
    aa:number
    nn:number

    add() {
        return this.aa + this.nn;
    }

    min() {
        return this.aa * this.nn;
    }
}
class b extends a {
    constructor(aaa:number,bbb:number) {
        super();
        this.aa = aaa;
        this.nn = bbb;
    }
    show(){
        console.log("add b=",this.aa+ this.nn)
    }
    
    combine(){
       console.log(super.add());
    console.log(super.min());
    }
}
const da = new b(10,10)

da.combine();

function cal(a:number,b:number){
    function add(){
        return a+b;
    }
    function min(){
        return a-b;
    }

    return [min(),add()];
}
console.log(cal(30,10))
