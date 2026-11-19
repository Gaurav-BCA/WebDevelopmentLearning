//Create Object
const student = {
    fullName: "Gaurav Bisht",
    rollNo: 14,
    printName: function () {
        console.log("Name =", this.fullName);
    }
};

//Prototype in JS
const employee = {
    calcTax() {
        console.log("Tax rate is 10%");
    }
};

const karanArjun = {
    salary: 1000000
};
const karanArjun2 = {
    salary: 1000000
};
const karanArjun3 = {
    salary: 1000000
};

karanArjun.__proto__ = employee;
karanArjun2.__proto__ = employee;
karanArjun3.__proto__ = employee;

// Create Class
class ToyotaCar {
    constructor(brand) {
        console.log("Creating a new object");
        this.brandName = brand;
    };
    start() {
        console.log("Start");
    };
    stop() {
        console.log("Stop");
    };
    // setBrand(brand){
    //     this.brandName = brand;
    // };
};

let fortuner = new ToyotaCar;
// fortuner.setBrand("Fortuner");
let lexus = new ToyotaCar("Lexus");
// lexus.setBrand("Lexus");


// Learn about Inheritence
class Person {
    constructor(){
        this.species = "Homo Sapiens";
    };
    eat() {
        console.log("Eat");
    };
    sleep() {
        console.log("Sleep");
    };
    work() {
        console.log("Do nothing!"); // If Child & Parent have same method, child's method will be used.[Method Overriding]
    };
};

class Engineer extends Person {
    work() {
        console.log("Solve problems, Build error free!"); // If Child & Parent have same method, child's method will be used.[Method Overriding]
    };
};

let gauravObj = new Engineer;

class Doctor extends Person {
    work() {
        console.log("Treat patients carefully!"); // If Child & Parent have same method, child's method will be used.[Method Overriding]
    };
};