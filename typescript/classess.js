var Rohit = /** @class */ (function () {
    function Rohit(name, age) {
        this.name = name;
        this.age = age;
    }
    Rohit.prototype.getdata = function () {
        return this.name + "" + this.age;
    };
    return Rohit;
}());
var newRohit = new Rohit('rohit', 55);
console.log(newRohit.getdata());
