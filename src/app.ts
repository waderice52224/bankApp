import { CheckingAccount} from "./CheckingAccount";
import { SavingsAccount} from "./SavingsAccount";
import {Transaction} from "./Transaction";
import {Retirement} from "./retirment";
import {Interest} from './interest'

let checking = new CheckingAccount();

let retirement = new Retirement();

let savings = new SavingsAccount();




console.log(savings.withdrawMoney(10, "good", 1));
console.log(savings.success);
console.log(savings.balance);
console.log(savings.description);
console.log(savings.withdrawMoney(1, "withdrawl", 1));
console.log(savings.withdrawMoney(1, "withdrawl", 1));
console.log(savings.withdrawMoney(1, "withdrawl", 1));
console.log(savings.withdrawMoney(1, "withdrawl", 1));
console.log(savings.withdrawMoney(1, "withdrawl", 1));
console.log(savings.withdrawMoney(1, "withdrawl", 1));
console.log(savings.withdrawMoney(1, "withdrawl", 1));
console.log(savings.success);
console.log(savings.errorMessage);
//
//
// console.log(savings.monthlyComplete);
// console.log(savings.errorMessage);
// console.log((savings.balance));
// console.log(savings.success);


// console.log(checking.depositMoney(100, "dont matter"));
// console.log(Interest.time(checking.balance, 24));
// console.log(checking.date);
// console.log(checking.advanceDate(1));
// // console.log(checking.date);
// console.log(checking.date);
// console.log(checking.advanceDate(30));
// console.log(Interest.timeDif());