const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let purchaseSchema = new Schema({
    itemList: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    deliveryAdress: {
        type: String,
        default: ''
    }
});

const Purchase = mongoose.model('Schema', (purchaseSchema));

module.exports = Purchase;