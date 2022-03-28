import express from 'express'
import AccountService from "./service/account-service.js";
const router = express.Router()
const accountService = new AccountService()
//our routes will be here

router.route('/accounts')
    .get(accountService.getAccounts)
    .post(accountService.addAccount)

router.route('/accounts/:acctNo')
    .get(accountService.getAccount)
    .delete(accountService.deleteAccount)

router.route('/accounts/:acctNo/trans')
    .post(accountService.addTransaction)

export default router
