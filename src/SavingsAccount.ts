import { Account } from './Account';
import { Transaction } from  "./Transaction";
import { AccountType } from "./AccountType";
import { TransactionOrigin} from "./TransactionOrigin";
import { displayClassName, displayClassNameWithPurpose } from "./decorators";

@displayClassName
export class SavingsAccount implements Account, Transaction {

    constructor(){
        this.dateOpened = new Date();
        this.date = new Date();
    }

    accountHolderName: string;
    accountHolderBirthDate: Date;
    balance: number = 100;
    accountType: AccountType;
    accountHistory: Transaction[];
    success: boolean;
    resultBalance: number;
    amount: number;
    description: string;
    transactionDate: Date;
    errorMessage: string;
    dateOpened: Date;
    monthlyTransaction: number = 6;
    monthlyComplete: number = 0;
    date: Date;



    withdrawMoney(amount: number, description: string, transactionOrigin: TransactionOrigin): Transaction {
        let currentBalance = this.balance;
        this.accountType = 2;
        this.amount = amount;
        if(transactionOrigin == TransactionOrigin.branch || TransactionOrigin.phone || TransactionOrigin.web){

            if (amount > currentBalance) {
                this.success = false;
                this.errorMessage = "Cannot withdrawal more than the available balance.";
                this.resultBalance = this.balance;
                this.transactionDate = new Date();
                this.description = description;

            }
            else if (this.monthlyComplete >= this.monthlyTransaction) {
                this.success = false;
                this.errorMessage = "Cannot withdrawal more than 6 times a month";
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
                this.monthlyComplete++;

            }
            return
        }
        return

    }

    depositMoney(amount: number, description: string): Transaction {
        this.balance = this.balance + amount;
        this.success = false;
        this.errorMessage = "";
        this.resultBalance = this.balance;
        this.transactionDate = new Date();
        this.description = description;
        return
    }

    advanceDate(numberOfDays: number) {
        this.date = new Date(this.date.setDate(this.date.getDate() + numberOfDays));
    }
}