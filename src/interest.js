var currentInterest = 0.05;
var d = new Date();
var hours = d.getHours();
var minutes = d.getMinutes();
var seconds = d.getSeconds();
function time(balance) {
    if (hours === 23) {
        if (minutes === 59) {
            if (seconds === 59) {
                var amountAdded = balance * currentInterest;
                balance = balance + amountAdded;
            }
        }
    }
    return balance;
}
//# sourceMappingURL=interest.js.map