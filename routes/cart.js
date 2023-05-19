import  {verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin} from "../middleware/verifyToken.js";
import {create_cart, update_cart, delete_cart,get_all_carts, get_user_cart} from "../controllers/cartControllers.js"
import { Router } from "express";

const router = Router()

/*-------------------------------------------------------------------CREATE CART------------------------------------------------------------------------*/
router.post("/", verifyToken, create_cart);

/*-------------------------------------------------------------------UPDATE CART-----------------------------------------------------------------------------*/
router.put("/:id", verifyTokenAndAuthorization, update_cart);

/*-------------------------------------------------------------------DELETE CART-----------------------------------------------------------------------------*/
router.delete("/:id", verifyTokenAndAuthorization, delete_cart);

/*------------------------------------------------------------------GET USER CART-----------------------------------------------------------------------------*/
router.get("/find/:userId", verifyTokenAndAuthorization, get_user_cart);

/*------------------------------------------------------------------GET ALL CARTs--------------------------------------------------------------------------------*/
router.get("/", verifyTokenAndAdmin, get_all_carts);



export {router};
