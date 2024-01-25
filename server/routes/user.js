const express = require('express');
const router = express.Router();
const bcrypt =  require('bcrypt');

const userModel = require('../models/user.js');



router.post('/signup', async(req,res) => {
    console.log('req ', req.body)
    let salt = await bcrypt.genSalt(10);
    let hashedPwd = await bcrypt.hash(req.body.password, salt)
    let newUser = new userModel({email: req.body.email, password: hashedPwd});
    let response = await newUser.save();
    console.log('user created ' , hashedPwd,' ', response);
    res.send(response);

})

router.post('/signin',async(req,res) => {
    console.log('req ', req.body);
    let emailToSignIn = await userModel.find({email: req.body.email})
})




module.exports = router;
