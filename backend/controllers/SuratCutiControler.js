import SuratCuti from "../models/SuratCutiModel.js";
import fs from 'fs'
import path from "path";

export const getSuratCuti = async (req, res) => {
    try {
        const response = await SuratCuti.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getSuratCutiById = async (req, res) => {
    try {
        const response = await SuratCuti.findOne({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getSuratCutiByPegawai = async (req, res) => {
    try {
        const response = await SuratCuti.findAll({
            where: {
                userid: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createSuratCuti = async (req, res) => {
    const name = req.body.name;
    const id = req.body.id;
    const divisi = req.body.divisi;
    const jatahcuti = req.body.jatahcuti;
    const tglpengajuan = req.body.tglpengajuan;
    const tglmulai = req.body.tglmulai;
    const tglselesai = req.body.tglselesai;
    const jeniscuti = req.body.jeniscuti;
    const alasan = req.body.alasan;
    const userid = req.body.userid;
    const status = req.body.status;
    const file = req.files.file;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    const fileName = file.md5 + ext;
    const url = `${req.protocol}://${req.get("host")}/pengajuanCuti/${fileName}`;
    const allowedType = ['.png', '.jpeg', '.jpg'];

    if (!allowedType.includes(ext.toLowerCase())) return res.status(422).json({ msg: "Invalide Image Type" });
    if (fileSize > 5000000) return res.status(422).json({ msg: "Image Must Be Less Than 5Mb" });

    file.mv(`./public/pengajuanCuti/${fileName}`, async (err) => {
        if (err) return res.status(500).json({ msg: err.message });
        try {
            await SuratCuti.create({
                id: id,
                name: name,
                userid: userid,
                divisi: divisi,
                jatahcuti: jatahcuti,
                tglpengajuan: tglpengajuan,
                tglmulai: tglmulai,
                tglselesai: tglselesai,
                jeniscuti: jeniscuti,
                alasan: alasan,
                status: status,
                file: fileName,
                fileurl: url,
            });
            res.status(201).json({ msg: "Surat Created" });
        } catch (error) {
            console.log(error.message);
        }
    })
}

export const updateSuratCuti = async (req, res) => {
    const suratCuti = await SuratCuti.findOne({
        where: {
            id: req.params.id
        }
    })

    if (!suratCuti) return res.status(404).json({ msg: "Surat Cuti Tidak Ditemukan" })

    const name = req.body.name;
    const id = req.body.id;
    const divisi = req.body.divisi;
    const jatahcuti = req.body.jatahcuti;
    const tglmulai = req.body.tglmulai;
    const tglselesai = req.body.tglselesai;
    const jeniscuti = req.body.jeniscuti;
    const alasan = req.body.alasan;
    const userid = req.body.userid;

    try {
        await SuratCuti.update({
            id: id,
            name: name,
            userid: userid,
            divisi: divisi,
            jatahcuti: jatahcuti,
            tglmulai: tglmulai,
            tglselesai: tglselesai,
            jeniscuti: jeniscuti,
            alasan: alasan
        }, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({ msg: "User Updated" });
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteSuratCuti = async (req, res) => {
    const suratCuti = await SuratCuti.findOne({
        where: {
            id: req.params.id
        }
    })

    if (!suratCuti) return res.status(404).json({ msg: "No Data Found" });

    try {
        const file = `./public/pengajuanCuti/${suratCuti.file}`;
        fs.unlinkSync(file);
        await SuratCuti.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(202).json({ msg: "Surat Cuti Deleted" });
    } catch (error) {
        console.log(error.message);
    }
}