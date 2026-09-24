//"use strict";

console.log(this);  // globalObject (window in browser), (global in node)


//this inside a function

function x () {
    //the value depends on strict/non strict mode
    console.log(this);
}


// this in strict mode - ( this substitution)

// if the value of this keyword is undefined or null
// this keyword will be replaced with globalObject 
//{only in strict mode}

// this keyword value depends on how this is called (window)

x(); // undefined
window.x(); // window

// this inside a object's method

const student = {
    name: "AKSHAY",
    printName: function () {
        console.log(this.name);
    },
};

student.printName();

const student2 = {
    name: "DEEPAK",
};

student.printName.call(student2);  // value of this = student2






// call apply bind methods (sharing methods)
