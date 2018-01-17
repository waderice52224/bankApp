import { CheckingAccount} from "./CheckingAccount";
import { SavingsAccount} from "./SavingsAccount";
import {Transaction} from "./Transaction";

let savings = new SavingsAccount();

console.log(savings.withdrawMoney(10, "good", 1));
console.log(savings.success);
console.log(savings.balance);