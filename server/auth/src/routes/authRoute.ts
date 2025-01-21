import { Router } from "express";
import { registerUser } from "../controllers/authController";

const authRoute = Router();

authRoute.post("/register", registerUser);

export default authRoute;
