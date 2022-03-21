import express from 'express'
import BankService from "./service/bank-service.js";
const bankService = new BankService()

const app = express()

const port = process.env.PORT || 3000

app.get('/api/accounts', bankService.getAccounts)

app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`)
})
