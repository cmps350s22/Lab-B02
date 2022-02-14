export class Bank {
    constructor(accounts) {
        this.accounts = accounts
    }

    addAccount(account) {
        this.accounts.push(account)
    }

    getAccount(accountNo) {
        this.accounts.find(a => a.getAccountNo() === accountNo)
    }

    avgBalance() {
        return this.sumBalance() / this.accounts.length
    }

    sumBalance() {
        return this.accounts.reduce((acc, b) => acc + b.balance, 0)
    }

    toJSON() {
        return JSON.stringify(this.accounts)
    }

    fromJSON(accountJSON) {
        return JSON.parse(this.accounts)
    }
}
