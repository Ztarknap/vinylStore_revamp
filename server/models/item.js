const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let itemSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    band: {
        type: String,
        required: true,
    },
    quantAvailable: {
        type: Number,
        default: 0
    },
    price: {
        type: String,
        default: '99999'   
    },
    releaseDate: {
        type: Date,
        default: '01.01.1990'
    },
    genre: {
        type: String,
        default: "not stated",
    },
    image: {
        type: String,
        default: "not found"
    }

});

const Item = mongoose.model('Item', (itemSchema));

module.exports = Item;