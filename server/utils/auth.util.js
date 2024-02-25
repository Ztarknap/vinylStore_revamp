const jwt = require("jsonwebtoken");

const createToken = (id, email) => {
    
    const token = jwt.sign(
        {
            userId: id,
            userEmail: email
        },
        "RANDOM-TOKEN",
        { expiresIn: "24h"}
    );
    return token;

    }

const authToken = async(req, res, next) => {
    try {
        console.log(req.headers);
    }
    catch(err) {
        console.log('err, ', err);
    }
    next();
}


module.exports = {createToken, authToken}