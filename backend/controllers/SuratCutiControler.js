import SuratCuti from "../models/SuratCutiModel.js";
import fs from 'fs'
import path from "path";
import { Sequelize } from "sequelize";

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
            },
            order: [
                ['id', 'DESC'],
            ],
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getSuratCutiByDivisi = async (req, res) => {
    try {
        const response = await SuratCuti.findAndCountAll({
            where: {
                divisi: req.params.divisi,
                status: req.headers.status
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getSuratCutiForSuperAdmin = async (req, res) => {
    try {
        const response = await SuratCuti.findAndCountAll({
            where: {
                status: "Super"
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getSuratCutiForLaporan = async (req, res) => {
    try {
        const response = await SuratCuti.findAll({
            where: {
                status: "Diterima"
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

// export const getTotalCutiByPegawai = async (req, res) => {
//     try {
//         const response = await SuratCuti.findAll({
//             where: {
//                 userid: req.params.id
//             },
//             attributes: ['jeniscuti', [Sequelize.fn('sum', Sequelize.col(''))]]
//         })
//     } catch (error) {
//         console.log(error.message)
//     }
// }

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
    const file = req?.files?.file;
    const ttdPegawai = req.body.ttdPegawai

    if (file) {
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
                    ttdpegawai: ttdPegawai
                });
                res.status(201).json({ msg: "Surat Created" });
            } catch (error) {
                console.log(error.message);
            }
        })
    } else {
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
                ttdpegawai: ttdPegawai
            });
            res.status(201).json({ msg: "Surat Created" });
        } catch (error) {
            console.log(error.message);
        }
    }

}

export const acceptedSuratCuti = async (req, res) => {
    const suratCuti = await SuratCuti.findOne({
        where: {
            id: req.params.id
        }
    })

    if (!suratCuti) return res.status(404).json({ msg: "Surat Cuti Tidak Ditemukan" })

    const status = req.body.status;
    const admin1 = req.body.admin1;
    const ttdAdmin1 = req.body.ttdAdmin1;
    const admin2 = req.body.admin2;
    const ttdAdmin2 = req.body.ttdAdmin2;
    const superAdmin = req.body.super;
    const ttdSuperAdmin = req.body.ttdSuper;
    const nosurat = req.body.noSurat

    try {
        await SuratCuti.update({
            status: status,
            admin1: admin1,
            ttdadmin1: ttdAdmin1,
            admin2: admin2,
            ttdadmin2: ttdAdmin2,
            super: superAdmin,
            ttdsuper: ttdSuperAdmin,
            nosurat: nosurat
        }, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({ msg: "Surat Cuti Updated" });
    } catch (error) {
        console.log(error.message);
    }
}

export const declinedSuratCuti = async (req, res) => {
    const suratCuti = await SuratCuti.findOne({
        where: {
            id: req.params.id
        }
    })

    if (!suratCuti) return res.status(404).json({ msg: "Surat Cuti Tidak Ditemukan" })

    const status = req.body.status;
    const komentar = req.body.komentar;

    try {
        await SuratCuti.update({
            status: status,
            komentar: komentar
        }, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({ msg: "Surat Cuti Updated" });
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
        if (suratCuti.file) {
            const file = `./public/pengajuanCuti/${suratCuti.file}`;
            fs.unlinkSync(file);
        }
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