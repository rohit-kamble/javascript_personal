class Rohit {
    name:string
    age:number

    constructor(name:string,age:number)
    {
        this.name = name;
        this.age = age;
    }
    getdata() {
        return this.name+""+this.age;
    }
}
const newRohit = new Rohit('rohit', 55);
console.log(newRohit)