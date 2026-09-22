const cart = ["shoes", "pants", "karate"];

createOrder(cart, function(orderId) {

    proceedToPayment(orderId, function (paymentInfp) {

        showOrderSummary(paymentInfp, function () {

            updateWalletBalance();
        });

    });
});



createOrder(cart)
.then((orderId) => proceedToPayment(orderId))
.then((paymentInfo) => showOrderSummary(paymentInfo))
.then((paymentInfo) => updateWalletBalance(paymentInfo))
    

