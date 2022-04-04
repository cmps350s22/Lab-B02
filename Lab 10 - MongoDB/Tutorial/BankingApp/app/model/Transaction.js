import mongoose from "mongoose";
import Account from './account.js'

const Schema = mongoose.Schema;
const transactionSchema = new Schema({
    acctNo: {
        type: Schema.Types.ObjectId,
        ref: 'Account',
        required: [true, 'acctNo is a required field']
    },
    transType: {
        type: String,
        enum: ['Withdraw', 'Deposit'],
        required: [true, 'transType can not be empty']
    },
    amount: {
        type: Number,
        min: [0, 'amount can not be negative'],
        required: [true, 'amount is a required field']
    }
})

export default mongoose.model('Transaction', transactionSchema)
