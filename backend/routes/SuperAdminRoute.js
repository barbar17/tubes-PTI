import express from "express";
import {
    getSuperAdmin,
    getSuperAdminById,
    createSuperAdmin,
    updateSuperAdmin,
    deleteSuperAdmin,
} from "../controllers/SuperAdminControler.js";

const router = express.Router();

router.get('/superadmin', getSuperAdmin);
router.get('/superadmin/:id', getSuperAdminById);
router.post('/superadmin', createSuperAdmin);
router.patch('/superadmin/:id', updateSuperAdmin);
router.delete('/superadmin/:id', deleteSuperAdmin);

export default router;