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


module.exports = createToken;