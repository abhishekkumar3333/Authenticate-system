  const user = require("../model/user-model")
  const bcrypt = require("bcrypt")
  const home = async (req,res) =>{
  try {
      res.status(200).send("welcome to home page")
  } catch (error) {
      console.log(error)
  }
  }
  const register = async (req, res) => {
    try {
      const { username, email, password } = req.body;

      // check if email exists
      const emailExist = await user.findOne({ email });
      if (emailExist) {
        return res.status(400).json({ message: "User already exists" }); 
        // 🔑 added return to stop execution
      }

      // hash password
      const saltRound = 10;
      const hash_password = await bcrypt.hash(password, saltRound);

      // create user
      const userCreated = await user.create({
        username,
        email,
        password: hash_password,
      });

      // success response
      res.status(201).json({
        message: "User registered successfully",
        token: await userCreated.generateToken(),
        userId: userCreated._id.toString(),
      });

    } catch (error) {
      console.error("❌ Register Error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };

  const login = async (req, res) => {
  try {
      const {password,email} = req.body;
      const userExist = await user.findOne({email});
      console.log(userExist)
      if(!userExist){
      return   res.status(400).send({
              message: "invalid credentials"
          })
      }
      const User = await bcrypt.compare(password,userExist.password);
      if(User){
      return   res.status(201).send({
              message: "login SuccessFully",
            token: await userExist.generateToken(),
            userId: userExist._id.toString(),
          })
      }
      else{
        return  res.status(401).send({
              message:"unauhtorized"
          })
      }
  } catch (error) {
      console.log(error)
  }
  };

 

  module.exports = {home,register,login};