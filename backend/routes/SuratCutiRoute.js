import express from "express";
import {
    getSuratCuti,
    getSuratCutiById,
    getSuratCutiByPegawai,
    getSuratCutiByDivisi,
    createSuratCuti,
    updateSuratCuti,
    deleteSuratCuti,
    acceptedSuratCuti
} from "../controllers/SuratCutiControler.js";

const router = express.Router();

router.get('/suratCuti', getSuratCuti);
router.get('/suratCuti/:id', getSuratCutiById);
router.get('/suratCuti/pegawai/:id', getSuratCutiByPegawai);
router.get('/suratCuti/divisi/:divisi', getSuratCutiByDivisi);
router.post('/suratCuti', createSuratCuti);
router.patch('/suratCuti/:id', updateSuratCuti);
router.patch('/suratCuti/accepted/:id', acceptedSuratCuti);
router.delete('/suratCuti/:id', deleteSuratCuti);

export default router;