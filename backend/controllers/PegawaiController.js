import Pegawai from "../models/PegawaiModel.js";
import bcrypt from 'bcrypt';
import fs from "fs"
import path from "path";
import { Sequelize } from "sequelize";

export const getPegawai = async (req, res) => {
    try {
        const response = await Pegawai.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getPegawaiById = async (req, res) => {
    try {
        const response = await Pegawai.findOne({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getPegawaiByDivisi = async (req, res) => {
    try {
        const response = await Pegawai.findAndCountAll({
            where: {
                divisi: req.params.divisi
            },
            attributes: ['id', 'name', 'divisi', 'username', 'jeniskelamin', 'telepon']
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const countPegawaiByDivisi = async (req, res) => {
    try {
        const response = await Pegawai.count({
            where: {
                divisi: req.params.divisi
            }
        });
    } catch (error) {

    }
}

export const createPegawai = async (req, res) => {
    const name = req.body.name;
    const id = req.body.id;
    const ttl = req.body.ttl;
    const jeniskelamin = req.body.jeniskelamin;
    const divisi = req.body.divisi;
    const agama = req.body.agama;
    const alamat = req.body.alamat;
    const telepon = req.body.telepon;
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;
    const tipeakun = req.body.tipeakun;
    const cutidiambil = req.body.totalDay

    try {
        await bcrypt.hash(password, 10).then((hash) => {
            Pegawai.create({
                name: name,
                id: id,
                ttl: ttl,
                jeniskelamin: jeniskelamin,
                divisi: divisi,
                agama: agama,
                alamat: alamat,
                telepon: telepon,
                email: email,
                username: username,
                password: hash,
                tipeakun: tipeakun,
                cutidiambil: cutidiambil
            });
            res.status(201).json({ msg: "User Created" });
        })
    } catch (error) {
        console.log(error.message);
    }
}

export const updateTotalCuti = async (req, res) => {
    const totalCuti = req.body.totalCuti
    console.log(totalCuti)
    console.log(req.params.id)
    try {
        Pegawai.update({
            cutidiambil: Sequelize.literal(`cutidiambil + ${totalCuti}`)
        }, {
            where: {
                id: req.params.id
            }
        });
        console.log("UPDATE")
        res.status(200).json({ msg: "User Updated" });
    } catch (error) {
        console.log(error.message);
    }
}

export const resetTotalCuti = async (req, res) => {
    try {
        Pegawai.update({
            cutidiambil: 0
        }, {
            where: {
                id: req.params.id
            }
        });
        console.log("UPDATE")
        res.status(200).json({ msg: "User Updated" });
    } catch (error) {
        console.log(error.message);
    }
}

export const updatePegawai = async (req, res) => {
    const pegawai = await Pegawai.findOne({
        where: {
            id: req.params.id
        }
    })

    if (!pegawai) return res.status(404).json({ msg: "Pegawai Tidak Ditemukan" })


    let filenameFoto = "";
    let filenameTtd = "";
    let fotourl = "";
    let ttdurl = "";
    if (req.files === null) {
        filenameFoto = pegawai.foto;
        filenameTtd = pegawai.ttd;
    } else {
        const isFotoChange = req.body.isFotoChange;
        const isTtdChange = req.body.isTtdChange;

        let fileFoto;
        let fileTtd;
        let fileSizeFoto;
        let fileSizeTtd;
        let extFoto;
        let extTtd;

        const allowType = ['.png', '.jpeg', '.jpg'];

        if (isFotoChange === "true" && isTtdChange === "false") {
            filenameTtd = pegawai.ttd;

            fileFoto = req.files.file;
            extFoto = path.extname(fileFoto.name);
            filenameFoto = fileFoto.md5 + pegawai.id + extFoto;
            fileSizeFoto = fileFoto.data.length;

            fotourl = `${req.protocol}://${req.get("host")}/pegawai/foto/${filenameFoto}`;

            if (!allowType.includes(extFoto.toLowerCase())) return res.status(422).json({ msg: "invalide image type" });
            if (fileSizeFoto > 5000000) return res.status(422).json({ msg: "image must be less then 5mb" });

            if (pegawai.foto) {
                const filepathFoto = `./public/pegawai/foto/${pegawai.foto}`;
                fs.unlinkSync(filepathFoto)
            }

            fileFoto.mv(`./public/pegawai/foto/${filenameFoto}`, (err) => {
                if (err) return res.status(500).json({ msg: err.message });
            })
        } else if (isFotoChange === "false" && isTtdChange === "true") {
            filenameFoto = pegawai.foto;

            fileTtd = req.files.file;
            extTtd = path.extname(fileTtd.name);
            filenameTtd = fileTtd.md5 + pegawai.id + extTtd;
            fileSizeTtd = fileTtd.data.length;

            ttdurl = `${req.protocol}://${req.get("host")}/pegawai/ttd/${filenameTtd}`;

            if (!allowType.includes(extTtd.toLowerCase())) return res.status(422).json({ msg: "invalide image type" });
            if (fileSizeTtd > 5000000) return res.status(422).json({ msg: "image must be less then 5mb" });

            if (pegawai.ttd) {
                const filepathTtd = `./public/pegawai/ttd/${pegawai.ttd}`;
                fs.unlinkSync(filepathTtd)
            }

            fileTtd.mv(`./public/pegawai/ttd/${filenameTtd}`, (err) => {
                if (err) return res.status(500).json({ msg: err.message });
            })
        } else if (isFotoChange === "true" && isTtdChange === "true") {
            fileFoto = req.files.file[0];
            extFoto = path.extname(fileFoto.name);
            filenameFoto = fileFoto.md5 + pegawai.id + extFoto;
            fileSizeFoto = fileFoto.data.length;
            fotourl = `${req.protocol}://${req.get("host")}/pegawai/foto/${filenameFoto}`;

            fileTtd = req.files.file[1];
            extTtd = path.extname(fileTtd.name);
            filenameTtd = fileTtd.md5 + pegawai.id + extTtd;
            fileSizeTtd = fileTtd.data.length;
            ttdurl = `${req.protocol}://${req.get("host")}/pegawai/ttd/${filenameTtd}`;

            if (!allowType.includes(extFoto.toLowerCase()) || !allowType.includes(extTtd.toLowerCase())) return res.status(422).json({ msg: "invalide image type" });
            if (fileSizeFoto > 5000000 || fileSizeTtd > 5000000) return res.status(422).json({ msg: "image must be less then 5mb" });

            if (pegawai.ttd && !pegawai.foto) {
                const filepathTtd = `./public/pegawai/ttd/${pegawai.ttd}`;
                fs.unlinkSync(filepathTtd)
            } else if (pegawai.foto && !pegawai.ttd) {
                const filepathFoto = `./public/pegawai/foto/${pegawai.foto}`;
                fs.unlinkSync(filepathFoto)
            } else {
                const filepathFoto = `./public/pegawai/foto/${pegawai.foto}`;
                const filepathTtd = `./public/pegawai/ttd/${pegawai.ttd}`;
                fs.unlinkSync(filepathFoto)
                fs.unlinkSync(filepathTtd)
            }

            fileTtd.mv(`./public/pegawai/ttd/${filenameTtd}`, (err) => {
                if (err) return res.status(500).json({ msg: err.message });
                fileFoto.mv(`./public/pegawai/foto/${filenameFoto}`, (err) => {
                    if (err) return res.status(500).json({ msg: err.message });
                })
            })
        }
    }

    const name = req.body.name;
    const id = req.body.id;
    const ttl = req.body.ttl;
    const jeniskelamin = req.body.jeniskelamin;
    const divisi = req.body.divisi;
    const agama = req.body.agama;
    const alamat = req.body.alamat;
    const telepon = req.body.telepon;
    const email = req.body.email;

    try {
        Pegawai.update({
            name: name,
            id: id,
            ttl: ttl,
            jeniskelamin: jeniskelamin,
            divisi: divisi,
            agama: agama,
            alamat: alamat,
            telepon: telepon,
            email: email,
            foto: filenameFoto,
            fotourl: fotourl ? fotourl : pegawai.fotourl,
            ttd: filenameTtd,
            ttdurl: ttdurl ? ttdurl : pegawai.ttdurl
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

export const deletePegawai = async (req, res) => {
    const pegawai = await Pegawai.findOne({
        where: {
            id: req.params.id
        }
    })

    if (!pegawai) return res.status(404).json({ msg: "Pegawai Tidak Ditemukan" });

    try {
        const filepathFoto = `./public/pegawai/foto/${pegawai.foto}`
        const filepathTtd = `./public/pegawai/ttd/${pegawai.ttd}`
        fs.unlinkSync(filepathFoto);
        fs.unlinkSync(filepathTtd);
        await Pegawai.destroy({
            where: {
                id: req.params.id
            }
        });


        res.status(202).json({ msg: "User Deleted" });
    } catch (error) {
        console.log(error.message);
    }
}