const jwt = require("jsonwebtoken");

const userModel = require('../models/user.ts');

const createToken = (id, email) => {
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

    //callback to check the cred
const authToken = async(req, res, next) => {
    try {
        //receiving and verifing tokens
        const token = await req.headers.authorization.split(" ")[1];
        const verifiedToken = jwt.verify(token,"RANDOM-TOKEN");
        let userData = await userModel.findById(verifiedToken.id);
        if (userData.length <= 0) {
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
        console.log(err);
        res.send(
            {   status: 2,
                message: "Invalid token"
            }
        )
    }
     
}


module.exports = {createToken, authToken}