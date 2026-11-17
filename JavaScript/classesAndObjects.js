//Create Object
const student =  {
    fullName : "Gaurav Bisht",
    rollNo : 14,
    printName : function() {
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
    start() {
        console.log("Start");
    };
    stop() {
        console.log("Stop");
    };
    setBrand(brand){
        this.brandName = brand;
    };
};

let fortuner = new ToyotaCar;
fortuner.setBrand("Fortuner");
let lexus = new ToyotaCar;
lexus.setBrand("Lexus");