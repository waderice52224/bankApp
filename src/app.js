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
//# sourceMappingURL=app.js.map