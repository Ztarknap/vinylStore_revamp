const express = require('express');
const router = express.Router();

const userModel = require('../models/user.js');


router.post('/signup', async(req,res) => {
    console.log('req ', req.body)
    let newUser = new userModel({email: req.body.email, password: req.body.password});
    let response = await newUser.save();
    console.log('user created' , response);
    res.send(response);

})




module.exports = router;
