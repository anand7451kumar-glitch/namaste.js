// callback fn injs


setTimeout(function () {
    console.log("timer")
}, 5000);

function x(y){
    console.log("x");
    y();

}
x(function y(){
    console.log("y");

});

// js is a single threaded  and a synchronous language

//blocking the main thread

// power of callbacks

//deep about event  listeners

// closurees demo with event listeners

// scope demo with event listeners

// garbage collection and removeEventListeners