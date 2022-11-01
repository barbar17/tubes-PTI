import express from 'express'
import { Login, getPermision, resetToken } from "../controllers/LoginController.js";
import { validateToken } from "../CustomMiddleware/AuthMiddleware.js"

const router = express.Router();

router.post('/login', Login);
router.post('/resetToken', resetToken);
router.get('/validate-token', validateToken, getPermision);

export default router