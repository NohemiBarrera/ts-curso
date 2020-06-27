console.log("hello world");

//types

var myString: string = "Hello Meme";
myString = 22 + "";
var myNumber: number = 22;
var myBool: boolean = false;
var myVar: any = "hello";
myVar = 25;

//Arrays
var StringArray: string[] = ["item1", "item2", "item3"];
var NumberArray: number[] = [1,2,3];
var BooleanArray: boolean[] = [true, false, true];
var AnyArray: any[] = [1,2,true,false,"miau",[], {}];

//Tuple
var strNumTuple: [string, number];
strNumTuple = ["miau", 22];

//void, undefined, null

/*let myVoid: void = undefined;
let myNull: null = null;
let myUndefined: undefined = undefined;*/

//Functions

function getSum(num1: number, num2: number): number{
    return num1 + num2
}

function getName(firstName: string, lastName?: string):string{ //?parámetro opcional
    if(lastName == undefined){
        return firstName;
    }
    return `${firstName} ${lastName}`
}

//Interfaces

interface ITodo {
    title: string;
    text: string
}

function showTodo(todo:ITodo){
    console.log(`${todo.title} - ${todo.text}`)
}

let myTodo: ITodo = {title: "eat dinner", text: "pending"}

showTodo(myTodo);

//Class

class User {
    private name: string;
    public email: string;
    protected age: number;

    constructor(name:string, email:string, age:number){
        this.name = name;
        this.email = email;
        this.age = age;
    }

    register(){
        console.log(`${this.name} is registered`)
    }

    showMeAge(){
        return this.age;
    }

    public AgeInYears(){
        return this.age + ' years';
    }

    payInvoice(){
        console.log(`${this.name} paide invoice`);
    }
}

var Meme = new User("Meme", "meme@gmail.com", 25);

console.log(Meme.AgeInYears());

class Member extends User {
    id: number;

    constructor(id, number, email, age){
        super(name, email, age);
        this.id = id;
    }

    payInvoice(){
        super.payInvoice();
    }
}

var momo = new Member(1, "Momo", "momo@gmail.com", 4);
momo.payInvoice();

document.write(getName("Meme"));