import  {verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin} from "../middleware/verifyToken.js";
import { create_product, update_product, delete_product, get_product, get_all_product } from "../controllers/productControllers.js";
import { Router } from "express";

const router = Router()

/*--------------------------------------------------------CREATE--------------------------------------------------------------------*/
router.post("/", verifyTokenAndAdmin, create_product);

/*--------------------------------------------------------UPDATE--------------------------------------------------------------------*/
router.put("/:id", verifyTokenAndAdmin, update_product);

/*--------------------------------------------------------DELETE--------------------------------------------------------------------*/
router.delete("/:id", verifyTokenAndAdmin, delete_product);

/*--------------------------------------------------------GET PRODUCT--------------------------------------------------------------------*/
router.get("/find/:id", verifyToken, get_product);

/*--------------------------------------------------------GET ALL PRODUCT--------------------------------------------------------------------*/
router.get("/", verifyToken, get_all_product);


export {router};
