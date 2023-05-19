import  {verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin} from "../middleware/verifyToken.js";
import {create_order, update_order, delete_order, get_order, get_all_order, get_income} from "../controllers/orderControllers.js";
import { Router } from "express";

const router = Router()

/*--------------------------------------------------------CREATE--------------------------------------------------------------------*/
router.post("/", verifyToken, create_order);

/*--------------------------------------------------------UPDATE--------------------------------------------------------------------*/
router.put("/:id", verifyTokenAndAdmin, update_order);

/*--------------------------------------------------------DELETE--------------------------------------------------------------------*/
router.delete("/:id", verifyTokenAndAdmin, delete_order);

/*--------------------------------------------------------GET USER ORDERS--------------------------------------------------------------------*/
router.get("/find/:userId", verifyTokenAndAuthorization, get_order);

/*--------------------------------------------------------GET ALL  Orders--------------------------------------------------------------------*/
router.get("/", verifyTokenAndAdmin, get_all_order);

/*--------------------------------------------------------GET MONTHLY INCOME--------------------------------------------------------------------*/
router.get("/income", verifyTokenAndAdmin, get_income);

export {router};
