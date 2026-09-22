const cart = ["shoes", "pants", "karate"];

createOrder(cart)
 .then(function(orderId) {
    console.log(orderId);
    return orderId;
 })
 .then(function (orderId) {
    return proceedToPayment(orderId);
 })
 .then(function(paymentInfo) {
    console.log(paymentInfo)
 })
 .catch(function (err) {
    console.log(err.message);
 })
 .then(function (orderId) {
    console.log("No matter what happens i will be called.");
 })


/// Producer
function createOrder(cart) {

    const pr = new Promise(function(resolve, reject){

        // create order
        //validate cart
        //orderid required
        if(!validateCart(cart)) {
            const err = new Error("Cart is not valid");
            reject(err);


        }
        // logic for createorder
        const orderId = "12345";
        if(orderId) {
            setTimeout(function () {
                resolve(orderId);

            }, 5000);
            resolve(orderId);
        }

    });

    return pr;

}

function proceedToPayment(oderId) {
    ///
    return new Promise( function(resolve, reject) {
        resolve("Payment Successful");
    })
}

function validateCart(cart) {

    return true;
}

