import fs from 'fs-extra'

const filePath = './data/accounts.json'

export default class AccountsRepo {
    async getAccounts(acctType) {
        const accounts = await fs.readJson(filePath)
        if (acctType)
            return accounts.filter(account => account.acctType.toLowerCase() === acctType.toLowerCase())
        return accounts
    }

    async getAccount(accountNo) {
        const accounts = await fs.readJson(filePath)
        return accounts.find(account => account.accountNo == accountNo)
    }

    async addAccount(account) {
        const accounts = await fs.readJson(filePath)
        accounts.push(account)
        return await this.saveAccounts(accounts)
    }

    async updateAccount(updatedAccount) {
        const accounts = await fs.readJson(filePath)
        const index = accounts
            .findIndex(account => account.accountNo === updatedAccount.accountNo)
        accounts[index] = updatedAccount
        await this.saveAccounts(accounts)
        return  `updated account ${updatedAccount.accountNo}`

    }

    async deleteAccount(accountNo) {
        let accounts = await fs.readJson(filePath)
        accounts = accounts.filter(account => account.accountNo != accountNo)
        await this.saveAccounts(accounts)
        return `deleted account ${accountNo}`
    }

    async saveAccounts(accounts) {
        return await fs.writeJson(filePath, accounts)
    }
}
