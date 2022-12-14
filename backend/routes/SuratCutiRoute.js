import express from "express";
import {
    getSuratCuti,
    getSuratCutiById,
    getSuratCutiByPegawai,
    getSuratCutiByDivisi,
    createSuratCuti,
    declinedSuratCuti,
    deleteSuratCuti,
    acceptedSuratCuti,
    getSuratCutiForSuperAdmin,
    getSuratCutiForLaporan,
    getSuratCutiForLaporanAdmin
} from "../controllers/SuratCutiControler.js";

const router = express.Router();

router.get('/suratCuti', getSuratCuti);
router.get('/suratCuti/super', getSuratCutiForSuperAdmin);
router.get('/suratCuti/laporan', getSuratCutiForLaporan);
router.get('/suratCuti/laporan/:divisi', getSuratCutiForLaporanAdmin);
router.get('/suratCuti/:id', getSuratCutiById);
router.get('/suratCuti/pegawai/:id', getSuratCutiByPegawai);
router.get('/suratCuti/divisi/:divisi', getSuratCutiByDivisi);
router.post('/suratCuti', createSuratCuti);
router.patch('/suratCuti/declined/:id', declinedSuratCuti);
router.patch('/suratCuti/accepted/:id', acceptedSuratCuti);
router.delete('/suratCuti/:id', deleteSuratCuti);

export default router;