const express = require('express');
const router = express.Router();
const bcrypt =  require('bcrypt');

const userModel = require('../models/user.js');

const createToken = require('../utils/auth.util');
 

const handlErrorDB = (err) => {
    console.log('DB error');
    console.log(err);
}

router.post('/signup', async(req,res) => {
    console.log('req ', req.body)
    let salt = await bcrypt.genSalt(10);
    let hashedPwd = await bcrypt.hash(req.body.password, salt)
    let newUser = new userModel({email: req.body.email, password: hashedPwd});
    try { 
    var response = await newUser.save();
    console.log('user created ' , hashedPwd,' ', response);
    }
    catch (error) {
        console.log(error.message);
        res.send(
            {
               status: 1,
               message: error.message,
               token: '' 
            }
        )
        return;
    }
    const token = createToken(response._id, response.email);
    res.send(
        {   status: 0,
            message: "Signed up",
            token: token
        }
    )
     

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
            const token = createToken(userData._id, userData.email)
            res.send(
                {
                    status: 0,
                    message: "Signed in",
                    token: token
                }
            )
        }
        else {
            res.send(
            {
                status: 1,
                message: "Wrong password",
                token: token,

            }    
            )
                
                 
        }
         
    }
    
})




module.exports = router;
