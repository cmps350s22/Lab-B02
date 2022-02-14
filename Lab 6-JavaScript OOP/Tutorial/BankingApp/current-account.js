import {BankAccount} from "./bank-account.js";

export class CurrentAccount extends BankAccount {
    constructor(balance, monthlyFee) {
        super(balance);
        this.monthlyFee = monthlyFee
    }

    deductFee() {
        this.balance -= this.monthlyFee
    }

    toString() {
        return `CurrentAccount ${super.toString()} : Monthly Fee : ${this.monthlyFee} `;
    }
}