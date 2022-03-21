import AccountsRepo from "../repository/accounts-repo.js";

const accountRepo = new AccountsRepo()

export default class BankService {

    async getAccounts(req, res) {
        const acctType = req.query.type
        const accounts = await accountRepo.getAccounts(acctType)
        res.json(accounts)
    }

    async getAccount(req, res) {
        const accountNo = req.params.acctNo
        const account = await accountRepo.getAccount(accountNo)
        res.json(account)
    }

    async deleteAccount(req, res) {
        const accountNo = req.params.acctNo
        const response = await accountRepo.deleteAccount(accountNo)
        res.json(response)
    }

    async addAccount(req, res) {
        const account = req.body
        const response = await accountRepo.addAccount(account)
        res.json(response)
    }

    async updateAccount(req, res) {
        const account = req.body
        const response = await accountRepo.updateAccount(account)
        res.json(response)

    }
}
