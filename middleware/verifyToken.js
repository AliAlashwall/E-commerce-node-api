import jwt from "jsonwebtoken";
import {User} from "../models/User.js"

/*-------------------------------------------check if user log in before--------------------------------------------*/

const verifyToken = (req, res, next) => {
  const token = req.cookies.jwt;
  if(token){
    jwt.verify(token, process.env.JWT_SECRET_KEY, (error, decodedToken)=>{
      if(error)console.log("error", error);
        console.log("decodeedToken", decodedToken);
        next();
    });
  }
  else{
    res.send("You are not authenticated!");
  }
};

/*-------------------------------------------check if this user is Authorized--------------------------------------------*/
const verifyTokenAndAuthorization =async (req, res, next) => {
  const token = req.cookies.jwt;

  jwt.verify(token, process.env.JWT_SECRET_KEY, async (error, decodedToken)=>{
  const user = await User.findById(decodedToken.id);
    if (user.id === req.params.id || user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not alowed to do that!");
    }
  });
};
/*-------------------------------------------check if this user is Admin--------------------------------------------*/
const verifyTokenAndAdmin = (req, res, next) => {
  
const token = req.cookies.jwt;
if(token){
  jwt.verify(token, process.env.JWT_SECRET_KEY, async (error, decodedToken)=>{

    const user = await User.findById(decodedToken.id)

    if(user.isAdmin){
      next();
    }else{
      console.log("you are not ADMIN");
    };
    });
  
}else{
  res.send("You are not authenticated!");
}
};

export {verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin};