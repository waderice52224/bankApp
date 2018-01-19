"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var decorators_1 = require("./decorators");
var Interest = (function () {
    function Interest() {
        this.currentInterest = 0.05;
        this.months = 0;
    }
    Interest.timeDif = function () {
        var date = new Date();
        var openDate = new Date();
        function advanceDate(days) {
            date = new Date(date.setDate(date.getDate() + days));
        }
        function dateDifference() {
            var difference;
            if (date > openDate) {
                difference = date.getDate() - openDate.getDate();
                difference = ((((difference / 1000) / 60) / 60) / 24);
            }
            return difference;
        }
    };
    Interest.time = function (balance, numMonths) {
        var intNum;
        // let final: number = balance;
        //check month difference
        // year difference
        // check
        for (var i = 0; i < numMonths; i++) {
            intNum = balance * (0.05 / 12);
            balance += intNum;
        }
        return balance;
    };
    Interest = __decorate([
        decorators_1.displayClassName
    ], Interest);
    return Interest;
}());
exports.Interest = Interest;
//# sourceMappingURL=interest.js.map