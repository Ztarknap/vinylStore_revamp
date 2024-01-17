const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let purchaseSchema = new Schema({
    itemList: [{
        type: String,
        required: true
    }],
    user: {
        email: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        code: {
            type: String,
            default: ''
        }
    },
    deliveryAdress: {
        type: String,
        default: ''
    }
});

const Purchase = mongoose.model('Purchase', (purchaseSchema));

module.exports = Purchase;