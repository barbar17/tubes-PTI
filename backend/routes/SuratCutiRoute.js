import express from "express";
import {
    getSuratCuti,
    getSuratCutiById,
    getSuratCutiByPegawai,
    getSuratCutiByDivisi,
    createSuratCuti,
    updateSuratCuti,
    deleteSuratCuti,
} from "../controllers/SuratCutiControler.js";

const router = express.Router();

router.get('/suratCuti', getSuratCuti);
router.get('/suratCuti/:id', getSuratCutiById);
router.get('/suratCuti/pegawai/:id', getSuratCutiByPegawai);
router.get('/suratCuti/divisi/:divisi', getSuratCutiByDivisi);
router.post('/suratCuti', createSuratCuti);
router.patch('/suratCuti/:id', updateSuratCuti);
router.delete('/suratCuti/:id', deleteSuratCuti);

export default router;