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