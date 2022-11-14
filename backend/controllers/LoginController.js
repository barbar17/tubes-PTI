import bcrypt from "bcrypt";
import Pegawai from "../models/PegawaiModel.js";
import Admin from "../models/AdminModel.js";
import Super from "../models/SuperAdminModel.js";
import jwt from "jsonwebtoken";


export const Login = async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    let account = await Pegawai.findOne({
        where: {
            username: username
        }
    })

    if (!account) {
        account = await Admin.findOne({
            where: {
                username: username
            }
        })
    }

    if (!account) {
        account = await Super.findOne({
            where: {
                username: username
            }
        })
    }

    if (!account) return res.json({ error: "Akun Tidak Ditemukan" });

    if (account) {
        bcrypt.compare(password, account.password).then((match) => {
            if (!match) return res.json({ error: "Username atau Password Salah" });
            else {
                const tipeakun = account.tipeakun
                const divisi = account.divisi
                const adminlvl = account?.adminlvl
                console.log(adminlvl)
                const accessToken = jwt.sign({ name: account.name, id: account.id, tipeakun: tipeakun, divisi: divisi, cutiDiambil: account.cutidiambil, adminlvl: adminlvl }, "tokenizer2022");
                res.send({ accessToken: accessToken, tipeakun: tipeakun });
            }
        })
    }
}

export const getPermision = async (req, res) => {
    res.json(req.user)
}

export const resetToken = async (req, res) => {
    const username = req.body.username

    let account = await Pegawai.findOne({
        where: {
            username: username
        }
    })

    if (!account) {
        account = await Admin.findOne({
            where: {
                username: username
            }
        })
    }

    if (account) {
        const accessToken = jwt.sign({ name: account.name, id: account.id, tipeakun: account.tipeakun, cutiDiambil: account.cutidiambil }, "tokenizer2022");
        res.send(accessToken);
    }
}