import { userRegistration, userLogin } from "../controllers/authControllers.js";
import { Router } from "express";

const router = Router()


/*---------------------------------------------REGISTER------------------------------------------------*/
router.post("/register", userRegistration);

/*----------------------------------------------LOGIN------------------------------------------------*/
router.post('/login', userLogin);

export {router};
