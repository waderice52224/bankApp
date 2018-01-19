import { displayClassName, displayClassNameWithPurpose } from "./decorators";
@displayClassName
export class Interest {


    currentInterest: number = 0.05;
    months: number = 0;


    static timeDif(){
        let date: Date = new Date();
        let openDate: Date = new Date();

        function advanceDate(days) {
            date = new Date(date.setDate(date.getDate() + days));
        }


        function dateDifference(): number {
            let difference: number;
            if(date > openDate) {
                difference = date.getDate() - openDate.getDate();
                difference = ((((difference/1000)/60)/60)/24);
            }
            return difference;
        }
    }


    static time(balance: number, numMonths: number) {
        let intNum: number;
        // let final: number = balance;
        //check month difference
        // year difference
        // check
        for (let i = 0; i < numMonths; i++){
            intNum = balance * (0.05 / 12);
            balance += intNum;
        }
        return balance
    }
}