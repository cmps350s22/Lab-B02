export class BankAccount {
    //attributes
    #accountNo

    constructor(balance) {
        this.#accountNo = (Math.random() * 1000).toFixed(0)
        this.balance = balance
    }

    //methods
    getAccountNo() {
        return this.#accountNo
    }

    deposit(amount) {
        if (amount >= 0)
            this.balance += amount
        else
            console.log('You can not deposit a negative amount')
    }

    withDraw(amount) {
        if (amount < this.balance)
            this.balance -= amount
        else
            console.log('You do not have enough money to withdraw')
    }

    toString() {
        return `Account No : ${this.#accountNo} : Balance : ${this.balance}`
    }
}