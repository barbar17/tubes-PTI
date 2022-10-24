import express from "express";
import { getPegawai } from "../controllers/PegawaiController.js";

const router = express.Router();

router.get('/pegawai', getPegawai);

export default router;