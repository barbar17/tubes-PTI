import Admin from "../models/AdminModel.js";
import path from "path";
import bcrypt, { hash } from 'bcrypt';
import fs from "fs"


export const getAdmin = async (req, res) => {
    try {
        const response = await Admin.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.massage);
    }
}

export const getAdminById = async (req, res) => {
    try {
        const response = await Admin.findOne({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createAdmin = async (req, res) => {
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
    const adminlvl = req.body.adminlvl

    try {
        await bcrypt.hash(password, 10).then((hash) => {
            Admin.create({
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
                adminlvl: adminlvl
            });
            res.status(201).json({ msg: "User Created" });
        })
    } catch (error) {
        console.log(error.message);
    }
}

export const updateAdmin = async (req, res) => {
    const admin = await Admin.findOne({
        where: {
            id: req.params.id
        }
    })

    if (!admin) return res.status(404).json({ msg: "Admin Tidak Ditemukan" })

    let filenameFoto = "";
    let filenameTtd = "";
    let fotourl = "";
    let ttdurl = "";

    if (req.files === null) {
        filenameFoto = admin.foto;
        filenameTtd = admin.ttd;
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
            filenameTtd = admin.ttd;

            fileFoto = req.files.file;
            extFoto = path.extname(fileFoto.name);
            filenameFoto = fileFoto.md5 + admin.id + extFoto;
            fileSizeFoto = fileFoto.data.length;

            fotourl = `${req.protocol}://${req.get("host")}/admin/foto/${filenameFoto}`;

            if (!allowType.includes(extFoto.toLowerCase())) return res.status(422).json({ msg: "invalide image type" });
            if (fileSizeFoto > 5000000) return res.status(422).json({ msg: "image must be less then 5mb" });

            if (admin.foto) {
                const filepathFoto = `./public/admin/foto/${admin.foto}`;
                fs.unlinkSync(filepathFoto)
            }

            fileFoto.mv(`./public/admin/foto/${filenameFoto}`, (err) => {
                if (err) return res.status(500).json({ msg: err.message });
            })
        } else if (isFotoChange === "false" && isTtdChange === "true") {
            filenameFoto = admin.foto;

            fileTtd = req.files.file;
            extTtd = path.extname(fileTtd.name);
            filenameTtd = fileTtd.md5 + admin.id + extTtd;
            fileSizeTtd = fileTtd.data.length;

            ttdurl = `${req.protocol}://${req.get("host")}/admin/ttd/${filenameTtd}`;

            if (!allowType.includes(extTtd.toLowerCase())) return res.status(422).json({ msg: "invalide image type" });
            if (fileSizeTtd > 5000000) return res.status(422).json({ msg: "image must be less then 5mb" });

            if (admin.ttd) {
                const filepathTtd = `./public/admin/ttd/${admin.ttd}`;
                fs.unlinkSync(filepathTtd)
            }

            fileTtd.mv(`./public/admin/ttd/${filenameTtd}`, (err) => {
                if (err) return res.status(500).json({ msg: err.message });
            })
        } else if (isFotoChange === "true" && isTtdChange === "true") {
            fileFoto = req.files.file[0];
            console.log(req.files.file)
            extFoto = path.extname(fileFoto.name);
            filenameFoto = fileFoto.md5 + admin.id + extFoto;
            fileSizeFoto = fileFoto.data.length;
            fotourl = `${req.protocol}://${req.get("host")}/admin/foto/${filenameFoto}`;

            fileTtd = req.files.file[1];
            extTtd = path.extname(fileTtd.name);
            filenameTtd = fileTtd.md5 + admin.id + extTtd;
            fileSizeTtd = fileTtd.data.length;
            ttdurl = `${req.protocol}://${req.get("host")}/admin/ttd/${filenameTtd}`;

            if (!allowType.includes(extFoto.toLowerCase()) || !allowType.includes(extTtd.toLowerCase())) return res.status(422).json({ msg: "invalide image type" });
            if (fileSizeFoto > 5000000 || fileSizeTtd > 5000000) return res.status(422).json({ msg: "image must be less then 5mb" });

            if (admin.ttd && !admin.foto) {
                const filepathTtd = `./public/admin/ttd/${admin.ttd}`;
                fs.unlinkSync(filepathTtd)
            } else if (admin.foto && !admin.ttd) {
                const filepathFoto = `./public/admin/foto/${admin.foto}`;
                fs.unlinkSync(filepathFoto)
            } else if (admin.foto && admin.ttd) {
                const filepathFoto = `./public/admin/foto/${admin.foto}`;
                const filepathTtd = `./public/admin/ttd/${admin.ttd}`;
                fs.unlinkSync(filepathFoto)
                fs.unlinkSync(filepathTtd)
            }

            fileTtd.mv(`./public/admin/ttd/${filenameTtd}`, (err) => {
                if (err) return res.status(500).json({ msg: err.message });
                fileFoto.mv(`./public/admin/foto/${filenameFoto}`, (err) => {
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

        Admin.update({
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
            fotourl: fotourl ? fotourl : admin.fotourl,
            ttd: filenameTtd,
            ttdurl: ttdurl ? ttdurl : admin.ttdurl
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

export const deleteAdmin = async (req, res) => {
    const admin = await Admin.findOne({
        where: {
            id: req.params.id
        }
    })

    if (!admin) return res.status(404).json({ msg: "Pegawai Tidak Ditemukan" });

    try {
        const filepathFoto = `./public/pegawai/foto/${pegawai.foto}`
        const filepathTtd = `./public/pegawai/ttd/${pegawai.ttd}`
        fs.unlinkSync(filepathFoto);
        fs.unlinkSync(filepathTtd);
        await Admin.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(202).json({ msg: "User Deleted" });
    } catch (error) {
        console.log(error.message);
    }
}