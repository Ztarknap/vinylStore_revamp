const jwt = require("jsonwebtoken");

const userModel = require('../models/user.js');

const createToken = (id, email) => {
    console.log('createToken ,',id, ' ', email);
    const token = jwt.sign(
        {
            id: id,
            email: email
        },
        "RANDOM-TOKEN",
        { expiresIn: "24h"}
    );
    return token;

    }

const authToken = async(req, res, next) => {
    try {
        const token = await req.headers.authorization.split(" ")[1];
     
        const verifiedToken = jwt.verify(token,"RANDOM-TOKEN");
        console.log('verifiedToken ,', verifiedToken);
        let userData = await userModel.findById(verifiedToken.id);
        console.log(userData);
        if (userData.length <= 0) {
            console.log('Id not found');
            res.send(
                {   status: 2,
                    message: "User not found"
                }
            )
        }
        else if (userData.email == verifiedToken.email) {
            req.body.email = verifiedToken.email;
            req.body.id = verifiedToken.id;
            next();
        }
 
    
    }
    catch(err) {
        console.log('err ,', err)
        res.send(
            {   status: 2,
                message: "Invalid token"
            }
        )
    }
     
}


module.exports = {createToken, authToken}