import Pegawai from "../models/PegawaiModel.js";
import bcrypt from 'bcrypt';
import fs from "fs"
import path from "path";

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
        const response = await Pegawai.findAll({
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
            });
            res.status(201).json({ msg: "User Created" });
        })
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

    console.log(pegawai.foto)

    let filenameFoto = "";
    if (req.files === null) {
        filenameFoto = pegawai.foto;
    } else {
        console.log(req.files)
        const file = req.files.file;
        const fileSize = file.data.length;
        const ext = path.extname(file.name);
        filenameFoto = file.md5 + ext;
        const allowType = ['.png', '.jpeg', '.jpg'];

        if (!allowType.includes(ext.toLowerCase())) return res.status(422).json({ msg: "invalide image type" });
        if (fileSize > 5000000) return res.status(422).json({ msg: "image must be less then 5mb" });

        if (pegawai.foto) {
            const filepath = `./public/pegawai/foto/${pegawai.foto}`;
            fs.unlinkSync(filepath)
        }

        file.mv(`./public/pegawai/foto/${filenameFoto}`, (err) => {
            if (err) return res.status(500).json({ msg: err.message });
        })
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
    const fotourl = `${req.protocol}://${req.get("host")}/pegawai/foto/${filenameFoto}`;

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
            fotourl: fotourl,
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
    try {
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