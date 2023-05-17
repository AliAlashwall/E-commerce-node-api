import  {verifyToken,verifyTokenAndAuthorization, verifyTokenAndAdmin} from "../middleware/verifyToken.js";
import { get_all_users, get_one_user, get_user_stats, update_user, delete_user} from "../controllers/userControllers.js";
import { Router } from "express";

const router = Router()
/*-------------------------------------------------------------------GET USER---------------------------------------------------*/
router.get("/find/:id", verifyTokenAndAdmin, get_one_user);

/*-------------------------------------------------------------------GET ALL USER-----------------------------------------------*/
router.get("/", verifyTokenAndAdmin, get_all_users);

/*-------------------------------------------------------------------GET USER STATS-------------------------------------------*/
router.get("/stats", verifyTokenAndAdmin, get_user_stats);

/*-------------------------------------------------------------------UPDATE------------------------------------------------------------*/
router.put("/:id", verifyTokenAndAuthorization, update_user);

/*-------------------------------------------------------------------DELETE-------------------------------------------------------------*/
router.delete("/:id",verifyTokenAndAdmin, delete_user);

export {router};