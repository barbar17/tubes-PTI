import Admin from "../models/AdminModel.js";
import bcrypt, { hash } from 'bcrypt';

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

    if (!Admin) return res.status(404).json({ msg: "Admin Tidak Ditemukan" })

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
            username: username,
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
    try {
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