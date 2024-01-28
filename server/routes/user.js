const express = require('express');
const router = express.Router();
const bcrypt =  require('bcrypt');
const jwt = require("jsonwebtoken");

const userModel = require('../models/user.js');

const handlErrorDB = (err) => {
    console.log('DB error');
    console.log(err);
}

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
    let userData = await userModel.find({email: req.body.email})
    if (userData.length <= 0) {
        console.log('email not found');
        res.send('Email not found');
    }
    else {
        let pwdCheck = await bcrypt.compare(req.body.password, userData[0].password ).catch(handlErrorDB);
        console.log(pwdCheck, ' res');
        if (pwdCheck) {
            const token = jwt.sign(
                {
                    userId: userData._id,
                    userEmail: userData.email
                },
                "RANDOM-TOKEN",
                { expiresIn: "24h"}
            );
            res.send(
                {
                    message: "Signed in",
                    token: token
                }
            )
        }
        else {
            res.send('Wrong password');
        }
         
    }
    
})




module.exports = router;
