let currentInterest: number = 0.05;
let d = new Date();
let hours: number = d.getHours();
let minutes: number = d.getMinutes();
let seconds: number = d.getSeconds();
function time (balance){
    if(hours === 23){
        if(minutes === 59){
            if(seconds === 59){
               let amountAdded: number = balance * currentInterest;
               balance = balance + amountAdded;
            }
        }
    }
    return balance;
}