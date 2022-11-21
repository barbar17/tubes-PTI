import Super from "../models/SuperAdminModel.js";
import bcrypt from 'bcrypt';
import fs from "fs"
import path from "path";
import { Sequelize } from "sequelize";

export const getSuperAdmin = async (req, res) => {
    try {
        const response = await Super.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.massage);
    }
}

export const getSuperAdminById = async (req, res) => {
    try {
        const response = await Super.findOne({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.massage);
    }
}

export const createSuperAdmin = async (req, res) => {
    const name = req.body.name;
    const id = req.body.id;
    const ttl = req.body.ttl;
    const jeniskelamin = req.body.jeniskelamin;
    const agama = req.body.agama;
    const alamat = req.body.alamat;
    const telepon = req.body.telepon;
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;
    const tipeakun = req.body.tipeakun;

    try {
        await bcrypt.hash(password, 10).then((hash) => {
            Super.create({
                name: name,
                id: id,
                ttl: ttl,
                jeniskelamin: jeniskelamin,
                agama: agama,
                alamat: alamat,
                telepon: telepon,
                email: email,
                username: username,
                password: hash,
                tipeakun: tipeakun,
            });
            res.status(201).json({ msg: "Super Admin Created" });
        })
    } catch (error) {
        console.log(error.massage);
    }
}

export const updateSuperAdmin = async (req, res) => {
    const superadmin = await Super.findOne({
        where: {
            id: req.params.id
        }
    })

    if (!superadmin) return res.status(404).json({ msg: "Super Admin tidak Ditemukan" })

    let filenameFoto = "";
    let filenameTtd = "";
    let fotourl = "";
    let ttdurl = "";
    if (req.files === null) {
        filenameFoto = superadmin.foto;
        filenameTtd = superadmin.ttd;
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
            filenameTtd = superadmin.ttd;

            fileFoto = req.files.file;
            extFoto = path.extname(fileFoto.name);
            filenameFoto = fileFoto.md5 + superadmin.id + extFoto;
            fileSizeFoto = fileFoto.data.length;

            fotourl = `${req.protocol}://${req.get("host")}/superadmin/foto/${filenameFoto}`;

            if (!allowType.includes(extFoto.toLowerCase())) return res.status(422).json({ msg: "invalide image type" });
            if (fileSizeFoto > 5000000) return res.status(422).json({ msg: "image must be less then 5mb" });

            if (superadmin.foto) {
                const filepathFoto = `./public/superadmin/foto/${superadmin.foto}`;
                fs.unlinkSync(filepathFoto)
            }

            fileFoto.mv(`./public/superadmin/foto/${filenameFoto}`, (err) => {
                if (err) return res.status(500).json({ msg: err.message });
            })
        } else if (isFotoChange === "false" && isTtdChange === "true") {
            filenameFoto = superadmin.foto;

            fileTtd = req.files.file;
            extTtd = path.extname(fileTtd.name);
            filenameTtd = fileTtd.md5 + superadmin.id + extTtd;
            fileSizeTtd = fileTtd.data.length;

            ttdurl = `${req.protocol}://${req.get("host")}/superadmin/ttd/${filenameTtd}`;

            if (!allowType.includes(extTtd.toLowerCase())) return res.status(422).json({ msg: "invalide image type" });
            if (fileSizeTtd > 5000000) return res.status(422).json({ msg: "image must be less then 5mb" });

            if (superadmin.ttd) {
                const filepathTtd = `./public/superadmin/ttd/${superadmin.ttd}`;
                fs.unlinkSync(filepathTtd)
            }

            fileTtd.mv(`./public/superadmin/ttd/${filenameTtd}`, (err) => {
                if (err) return res.status(500).json({ msg: err.message });
            })
        } else if (isFotoChange === "true" && isTtdChange === "true") {
            fileFoto = req.files.file[0];
            extFoto = path.extname(fileFoto.name);
            filenameFoto = fileFoto.md5 + superadmin.id + extFoto;
            fileSizeFoto = fileFoto.data.length;
            fotourl = `${req.protocol}://${req.get("host")}/superadmin/foto/${filenameFoto}`;

            fileTtd = req.files.file[1];
            extTtd = path.extname(fileTtd.name);
            filenameTtd = fileTtd.md5 + superadmin.id + extTtd;
            fileSizeTtd = fileTtd.data.length;
            ttdurl = `${req.protocol}://${req.get("host")}/superadmin/ttd/${filenameTtd}`;

            if (!allowType.includes(extFoto.toLowerCase()) || !allowType.includes(extTtd.toLowerCase())) return res.status(422).json({ msg: "invalide image type" });
            if (fileSizeFoto > 5000000 || fileSizeTtd > 5000000) return res.status(422).json({ msg: "image must be less then 5mb" });

            if (superadmin.ttd && !superadmin.foto) {
                const filepathTtd = `./public/superadmin/ttd/${superadmin.ttd}`;
                fs.unlinkSync(filepathTtd)
            } else if (superadmin.foto && !superadmin.ttd) {
                const filepathFoto = `./public/superadmin/foto/${superadmin.foto}`;
                fs.unlinkSync(filepathFoto)
            } else if (superadmin.foto && superadmin.ttd) {
                const filepathFoto = `./public/superadmin/foto/${superadmin.foto}`;
                const filepathTtd = `./public/superadmin/ttd/${superadmin.ttd}`;
                fs.unlinkSync(filepathFoto)
                fs.unlinkSync(filepathTtd)
            }

            fileTtd.mv(`./public/superadmin/ttd/${filenameTtd}`, (err) => {
                if (err) return res.status(500).json({ msg: err.message });
                fileFoto.mv(`./public/superadmin/foto/${filenameFoto}`, (err) => {
                    if (err) return res.status(500).json({ msg: err.message });
                })
            })
        }
    }

    const name = req.body.name;
    const id = req.body.id;
    const ttl = req.body.ttl;
    const jeniskelamin = req.body.jeniskelamin;
    const agama = req.body.agama;
    const alamat = req.body.alamat;
    const telepon = req.body.telepon;
    const email = req.body.email;

    try {
        Super.update({
            name: name,
            id: id,
            ttl: ttl,
            jeniskelamin: jeniskelamin,
            agama: agama,
            alamat: alamat,
            telepon: telepon,
            email: email,
            foto: filenameFoto,
            fotourl: fotourl ? fotourl : superadmin.fotourl,
            ttd: filenameTtd,
            ttdurl: ttdurl ? ttdurl : superadmin.ttdurl
        }, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({ msg: "Super Admin Updated" });
    } catch (error) {
        console.log(error.massage);
    }
}

export const deleteSuperAdmin = async (req, res) => {
    const superadmin = await Super.findOne({
        where: {
            id: req.params.id
        }
    })

    if (!superadmin) return res.status(404).json({ msg: "Super admin tidak ditemukan" });

    try {
        const filepathFoto = `./public/superadmin/foto/${superadmin.foto}`
        const filepathTtd = `./public/superadmin/ttd/${superadmin.ttd}`
        fs.unlinkSync(filepathFoto);
        fs.unlinkSync(filepathTtd);
        await Pegawai.destroy({
            where: {
                id: req.params.id
            }
        });

        res.status(202).json({ msg: "Super admin Deleted" });
    } catch (error) {
        console.log(error.massage);
    }
}