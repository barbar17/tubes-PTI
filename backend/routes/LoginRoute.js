import express from 'express'
import { Login } from "../controllers/LoginController.js";

const router = express.Router();

router.post('/login', Login);

export default Login