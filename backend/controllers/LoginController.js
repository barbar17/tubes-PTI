import bcrypt from "bcrypt"
import Pegawai from "../models/PegawaiModel.js"

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
                res.json("Login berhasil")
            }
        })
    }
}