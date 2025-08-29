const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    username :{
        type : String,
        required :true
    },
    email : {
        type: String,
        required :true
    },
    password :{
        type : String,
        required :true
    }
})
// jwt token 
userSchema.methods.generateToken = async function (){
    try {
        return jwt.sign(
            {
                email: this.email
            },
             process.env.JWT_SECRET,
             {
                expiresIn: "60s"
             }
        )
    } catch (error) {
        console.log(error)
    }
}

  
const user = new mongoose.model("User",userSchema);

module.exports = user;