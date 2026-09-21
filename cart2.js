const cart = ["shoes", "pants", "karate"];

createOrder(cart,function(orderId) {
    proceedToPayment(orderId);
});

const promise = createOrder(cart);

// {data: undefined}

promise.then(function(orderId) {
    proceedToPayment(orderId);
});