"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CheckingAccount_1 = require("./CheckingAccount");
var SavingsAccount_1 = require("./SavingsAccount");
var retirment_1 = require("./retirment");
var checking = new CheckingAccount_1.CheckingAccount();
var retirement = new retirment_1.Retirement();
var savings = new SavingsAccount_1.SavingsAccount();
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
//# sourceMappingURL=app.js.map