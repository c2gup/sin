
const userModel = require("../models/fistmodel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "Chena";

const signup = async (req, res) =>{

const {username, email, password }= req.body;
try {
    const existingUser = await userModel.findOne({email:email})
    if(existingUser){
      return res.send(400).json({message : "Uesr alredy hai"});
    } 
    
    const hashedPassword = await bcrypt.hash(password,10);

    const result = await userModel.create({
      
      email:email,
      password : hashedPassword,
      username : username,
     
    });

    const token = jwt.sign({email : result.email, id :result._id}, SECRET_KEY);
    res.status(201).json({User: result,token:token})
} catch (error) {
      console.log(error);
      res.send(500).json({message:"kuch gkat ba"});
}


}

module.exports = {signup};