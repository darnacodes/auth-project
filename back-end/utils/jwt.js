const jwt=require("jsonwebtoken")
require('dotenv').config()

function generateJwt(userId){
    const payload = {
        user: {
          id: userId
        }
      };
    
      return jwt.sign(payload, process.env.jwtSecret, { expiresIn: "1h" });
}

module.exports =generateJwt