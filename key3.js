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

const obj = {
    a:10,
    x: () => {
        console.log(this);
    },
};
obj.x()

// this inside nested arrow function

const obj2 = {
    a:20,
    x: function () {
        // enclosing lexical context
       const y = () => {
            console.log(this);
        }
        y()
        
    },
};
obj2.x();

// this inside DOM elements => reference to HTMLelement













