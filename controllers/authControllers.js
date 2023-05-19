import {User} from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

/*----------------------------------------------------------REGISTER----------------------------------------------------------------*/

const userRegistration = async (req, res) => {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      isAdmin : req.body.isAdmin
    });
    try {
      const savedUser = await newUser.save();
      res.status(201).json(savedUser);
    } catch (err) {
      res.status(500).json(err);
    }
};
/*----------------------------------------------------------LOGIN-----------------------------------------------------------------*/
const createToken = (id)=>{
    return jwt.sign({id}, process.env.JWT_SECRET_KEY,{
      expiresIn: 2 * 24 * 60 * 60,
    });
  };
//------------------------------------
const userLogin = async (req, res) => {
    const {email, password} = req.body;
    try{
      const user = await User.findOne({email});
      if(user){
        const auth = await bcrypt.compare(password, user.password);
        if(auth){
          const token = createToken(user._id);
          console.log("login successfully...");
          res.cookie("jwt", token);
          res.send(user);
        }else{
          res.send("Password is incorrect!")
        }
      }else{res.send("incorrect email!")}
    }
    catch(error){
      res.send(error);
    }
};
export {userRegistration, userLogin}