import { CheckingAccount} from "./CheckingAccount";
import { SavingsAccount} from "./SavingsAccount";
import {Transaction} from "./Transaction";
import {Retirement} from "./retirment";


let checking = new CheckingAccount();

let retirement = new Retirement();

let savings = new SavingsAccount();


console.log(savings.withdrawMoney(10, "good", 1));
console.log(savings.success);
console.log(savings.balance);
console.log(savings.description);