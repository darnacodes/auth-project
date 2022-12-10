const jwt = require("jsonwebtoken")

function auth(req, res, next){
    const bearerToken =req.header("authorization")
    //send error if no authorization header
    const token=bearerToken.split(" ")[1];

    try {
        const verify = jwt.verify(token, process.env.jwtSecret)
        req.user= verify.user

        next()
    } catch {
        res.status(403).send("Invalid token")
    }
}

module.exports = auth