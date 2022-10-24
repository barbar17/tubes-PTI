import Pegawai from "../models/PegawaiModel.js";

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

    try {
        await Pegawai.create({
            name: name,
            id: id,
            ttl: ttl,
            jeniskelamin: jeniskelamin,
            divisi: divisi,
            agama: agama,
            alamat: alamat,
            telepon: telepon,
            email: email,
        });
        res.status(201).json({ msg: "User Created" });
    } catch (error) {
        console.log(error.message);
    }
}

export const updatePegawai = async (req, res) => {
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
        await Pegawai.update({
            name: name,
            id: id,
            ttl: ttl,
            jeniskelamin: jeniskelamin,
            divisi: divisi,
            agama: agama,
            alamat: alamat,
            telepon: telepon,
            email: email,
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