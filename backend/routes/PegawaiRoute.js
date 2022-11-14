import express from "express";
import {
    getPegawai,
    getPegawaiById,
    createPegawai,
    updatePegawai,
    deletePegawai,
    getPegawaiByDivisi,
    updateTotalCuti,
    resetTotalCuti
} from "../controllers/PegawaiController.js";

const router = express.Router();

router.get('/pegawai', getPegawai);
router.get('/pegawai/:id', getPegawaiById);
router.get('/pegawai-per-divisi/:divisi', getPegawaiByDivisi);
router.post('/pegawai', createPegawai);
router.patch('/pegawai/:id', updatePegawai);
router.patch('/pegawai/totalCuti/:id', updateTotalCuti);
router.patch('/pegawai/reset/totalCuti/:id', resetTotalCuti);
router.delete('/pegawai/:id', deletePegawai);

export default router;