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
console.log("hello world");
//types
var myString = "Hello Meme";
myString = 22 + "";
var myNumber = 22;
var myBool = false;
var myVar = "hello";
myVar = 25;
//Arrays
var StringArray = ["item1", "item2", "item3"];
var NumberArray = [1, 2, 3];
var BooleanArray = [true, false, true];
var AnyArray = [1, 2, true, false, "miau", [], {}];
//Tuple
var strNumTuple;
strNumTuple = ["miau", 22];
//void, undefined, null
/*let myVoid: void = undefined;
let myNull: null = null;
let myUndefined: undefined = undefined;*/
//Functions
function getSum(num1, num2) {
    return num1 + num2;
}
function getName(firstName, lastName) {
    if (lastName == undefined) {
        return firstName;
    }
    return firstName + " " + lastName;
}
function showTodo(todo) {
    console.log(todo.title + " - " + todo.text);
}
var myTodo = { title: "eat dinner", text: "pending" };
showTodo(myTodo);
//Class
var User = /** @class */ (function () {
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    User.prototype.register = function () {
        console.log(this.name + " is registered");
    };
    User.prototype.showMeAge = function () {
        return this.age;
    };
    User.prototype.AgeInYears = function () {
        return this.age + ' years';
    };
    User.prototype.payInvoice = function () {
        console.log(this.name + " paide invoice");
    };
    return User;
}());
var Meme = new User("Meme", "meme@gmail.com", 25);
console.log(Meme.AgeInYears());
var Member = /** @class */ (function (_super) {
    __extends(Member, _super);
    function Member(id, number, email, age) {
        var _this = _super.call(this, name, email, age) || this;
        _this.id = id;
        return _this;
    }
    Member.prototype.payInvoice = function () {
        _super.prototype.payInvoice.call(this);
    };
    return Member;
}(User));
var momo = new Member(1, "Momo", "momo@gmail.com", 4);
momo.payInvoice();
document.write(getName("Meme"));
