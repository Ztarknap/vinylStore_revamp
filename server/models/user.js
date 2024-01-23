const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
    email: {
        type: String,
        unique: [true, "Email already exists"],
        required: [true, "Email is required"]
    },
    password: {
        type: String,
        unique: false,
        required: [true, "Password is required"]
    }
})


const User = mongoose.model('User', (userSchema));

module.exports = User;