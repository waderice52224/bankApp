"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var TransactionOrigin_1 = require("./TransactionOrigin");
var decorators_1 = require("./decorators");
var Retirement = (function () {
    function Retirement() {
        this.balance = 100;
        this.userAge = 64;
        this.monthlyTransaction = 6;
        this.dateOpened = new Date();
        this.date = new Date();
    }
    Retirement.prototype.withdrawMoney = function (amount, description, transactionOrigin) {
        var currentBalance = this.balance;
        this.accountType = 2;
        this.amount = amount;
        if (transactionOrigin == TransactionOrigin_1.TransactionOrigin.branch || TransactionOrigin_1.TransactionOrigin.phone || TransactionOrigin_1.TransactionOrigin.web) {
            if (amount > currentBalance) {
                this.success = false;
                this.errorMessage = "Cannot withdrawal more than the available balance.";
                this.resultBalance = this.balance;
                this.transactionDate = new Date();
                this.description = description;
            }
            else {
                this.success = true;
                this.errorMessage = "";
                this.resultBalance = this.balance -= amount;
                this.transactionDate = new Date();
                this.description = description;
            }
            return;
        }
        return;
    };
    Retirement.prototype.depositMoney = function (amount, description) {
        this.balance = this.balance + amount;
        this.success = false;
        this.errorMessage = "";
        this.resultBalance = this.balance;
        this.transactionDate = new Date();
        this.description = description;
        return;
    };
    Retirement.prototype.advanceDate = function (numberOfDays) {
        this.date = new Date(this.date.setDate(this.date.getDate() + numberOfDays));
    };
    Retirement = __decorate([
        decorators_1.displayClassName
    ], Retirement);
    return Retirement;
}());
exports.Retirement = Retirement;
//# sourceMappingURL=retirment.js.map