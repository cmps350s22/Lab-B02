import AccountsRepo from "../repository/accounts-repo.js";

const accountRepo = new AccountsRepo()

export default class BankService {

    async getAccounts(req, res) {
        const acctType = req.query.type
        const accounts = await accountRepo.getAccounts(acctType)
        res.json(accounts)
    }

    async getAccount(req, res) {

    }

    async addAccount(req, res) {

    }

    async updateAccount(req, res) {


    }

    async deleteAccount(req, res) {

    }

    async saveAccounts(req, res) {

    }
}
