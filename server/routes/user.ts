const express = require('express');
const router = express.Router();
const bcrypt =  require('bcrypt');

const userModel = require('../models/user.ts');

const {createToken} = require('../utils/auth.util.ts');
 

const handlErrorDB = (err:unknown) => {
    console.log('DB error');
    console.log(err);
}

router.post('/signup', async(req:any,res:any) => {
    let salt = await bcrypt.genSalt(10);
    let hashedPwd = await bcrypt.hash(req.body.password, salt)
    let newUser = new userModel({email: req.body.email, password: hashedPwd});
    try { 
    var response = await newUser.save();
    }
    catch (error: any) {
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

router.post('/signin',async(req:any,res:any) => {
    console.log('req ', req.body);
    let token = ''

    let userData = await userModel.find({email: req.body.email})
    if (userData.length <= 0) {
        res.send(
            {
                status: 1,
                message: "Email not found",
                token: token,
                id: ''
            }
        )
    }
    else {
        let pwdCheck = await bcrypt.compare(req.body.password, userData[0].password ).catch(handlErrorDB);
        if (pwdCheck) {
            let token = createToken(userData[0]._id, userData[0].email)
            res.send(
                {
                    status: 0,
                    message: "Signed in",
                    token: token,
                    id: userData[0]._id
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
