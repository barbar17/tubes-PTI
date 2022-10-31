import bcrypt from "bcrypt";
import Pegawai from "../models/PegawaiModel.js";
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
        res.json({ error: "Akun Tidak Ditemukan" });
    }

    if (account) {
        bcrypt.compare(password, account.password).then((match) => {
            if (!match) return res.json({ error: "Username atau Password Salah" });
            else {
                const accessToken = jwt.sign({ username: account.username, id: account.id, tipeakun: account.tipeakun }, "tokenizer2022");
                res.send(accessToken);
            }
        })
    }
}

export const getPermision = async (req, res) => {
    res.json(req.user)
}