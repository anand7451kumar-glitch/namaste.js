const cart = ["shoes", "pants", "karate"];

const promise = createOrder(cart); // oderId
console.log(promise);

promise.then(function(orderId) {
    console.log(orderId);
    //proceedToPayment(oderId);
});


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

function validateCart(cart) {

    return true;
}

