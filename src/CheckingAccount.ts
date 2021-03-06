import { Account } from './Account';
import { Transaction } from  "./Transaction";
import { AccountType } from "./AccountType";
import { TransactionOrigin} from "./TransactionOrigin";
import { displayClassName, displayClassNameWithPurpose } from "./decorators";

@displayClassName
export class CheckingAccount implements Account, Transaction {

    constructor(){
        this.dateOpened = new Date();
        this.date = new Date();
    }

  accountHolderName: string;
  accountHolderBirthDate: Date;
  balance: number = 1000;
  accountType: AccountType;
  accountHistory: Transaction[];
  success: boolean;
  resultBalance: number;
  amount: number;
  description: string;
  transactionDate: Date;
  errorMessage: string;
  dateOpened: Date;
  date: Date;



  withdrawMoney(amount: number, description: string, transactionOrigin: TransactionOrigin): Transaction {
      let currentBalance = this.balance;
      this.accountType = 1;
        if(transactionOrigin == TransactionOrigin.branch || TransactionOrigin.phone || TransactionOrigin.web){
            this.amount = amount;
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
    // let day = this.date.getDate();
    // return day;
  }
}