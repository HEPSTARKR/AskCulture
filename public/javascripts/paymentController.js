/**
 * Created by Sunrin on 2016. 2. 24..
 */
$.get('/client_token',function(data){
    braintree.setup(data, "custom", {
        paypal: {
            container: "paypal-container"
            //PayPal options
        },
        onPaymentMethodReceived: function (obj) {
            console.log(obj);
        }
    });
});