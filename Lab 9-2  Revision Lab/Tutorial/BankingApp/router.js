import express from 'express'
import AccountService from "./service/account-service.js";
const router = express.Router()
const accountService = new AccountService()
//our routes will be here

router.route('/accounts')
    .get(accountService.getAccounts)



export default router
