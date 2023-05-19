import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import {router as userRoute} from "./src/routes/user.js";
import {router as authRoute} from "./src/routes/auth.js";
import {router as productRoute} from "./src/routes/product.js";
import {router as cartRoute} from "./src/routes/cart.js";
import {router as orderRoute} from "./src/routes/order.js";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();

dotenv.config();
mongoose.set('strictQuery', true)
mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());                     // to read the body of the req
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running!");
});

