import AccountRepo from "../repository/account-repo.js";
const accountRepo = new AccountRepo()

export default class AccountService {

    async getAccounts(req, res) {
        try {
            const accounts = await accountRepo.getAccounts(req.query.type)
            res.json(accounts)
        } catch (e) {
            res.status(500).send(e)
        }
    }
}
