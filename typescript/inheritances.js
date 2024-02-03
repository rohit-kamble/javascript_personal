var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var a = /** @class */ (function () {
    function a() {
    }
    a.prototype.add = function () {
        return this.aa + this.nn;
    };
    a.prototype.min = function () {
        return this.aa * this.nn;
    };
    return a;
}());
var b = /** @class */ (function (_super) {
    __extends(b, _super);
    function b(aaa, bbb) {
        var _this = _super.call(this) || this;
        _this.aa = aaa;
        _this.nn = bbb;
        return _this;
    }
    b.prototype.show = function () {
        console.log("add b=", this.aa + this.nn);
    };
    b.prototype.combine = function () {
        console.log(_super.prototype.add.call(this));
        console.log(_super.prototype.min.call(this));
    };
    return b;
}(a));
var da = new b(10, 10);
da.combine();
function cal(a, b) {
    function add() {
        return a + b;
    }
    function min() {
        return a - b;
    }
    return [min(), add()];
}
console.log(cal(30, 10));
