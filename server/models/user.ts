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
//middleware for email validation
userSchema.post('save', function(error:any, doc:any, next:any) {
    if (error.name === 'MongoServerError' && error.code === 11000) {
      next(new Error('Email already exists'));
    } else {
      next();
    }
  });

const User = mongoose.model('User', (userSchema));

module.exports = User;