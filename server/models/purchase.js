const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ObjectId = require('mongodb').ObjectId;


let purchaseSchema = new Schema({
    itemList: [{
        type: String,
        required: true
    }],
    user_id: {
        type: ObjectId,
        required: true
    },
    deliveryAdress: {
        type: String,
        default: ''
    }
});

const Purchase = mongoose.model('Purchase', (purchaseSchema));

module.exports = Purchase;