import express from "express";
import BankService from "./service/bank-service.js";

const bankService = new BankService()

const router = express.Router();

router.route('/accounts')
    .get(bankService.getAccounts)
    .post(bankService.addAccount)
    .put(bankService.updateAccount)

router.route('/accounts/:acctNo')
    .get(bankService.getAccount)
    .delete(bankService.deleteAccount)

export default router
