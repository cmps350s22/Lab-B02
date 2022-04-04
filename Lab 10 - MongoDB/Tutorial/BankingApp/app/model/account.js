import mongoose from "mongoose";

const Schema = mongoose.Schema;
const accountSchema = new Schema({
    acctType: {
        type: String,
        enum: ['Current', 'Saving'],
        required: [true, 'acctType can not be empty']
    },
    balance: {
        type: Number,
        min: [0, 'min balance can not be negative'],
        required: [true, 'balance is a required field']
    }
})
accountSchema.virtual('accountNo', function () {
   return this._id
})

accountSchema.virtual('minBalance', function () {
    if (this.acctType === 'Saving')
        return 1000
})

accountSchema.virtual('profit', function () {
    if (this.acctType === 'Saving')
        return this.balance * 0.05
})

export default mongoose.model('Account', accountSchema)
