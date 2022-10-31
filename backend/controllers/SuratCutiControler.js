import SuratCuti from "../models/SuratCutiModel.js";

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
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

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
        });
        res.status(201).json({ msg: "Surat Created" });
    } catch (error) {
        console.log(error.message);
    }
}

export const updateSuratCuti = async (req, res) => {
    const suratCuti = await SuratCuti.findOne({
        where: {
            id: req.params.id
        }
    })

    if (!suratCuti) return res.status(404).json({ msg: "Surat Cuti Tidak Ditemukan" })

    const name = req.body.name;
    const id = req.body.id;
    const divisi = req.body.divisi;
    const jatahcuti = req.body.jatahcuti;
    const tglmulai = req.body.tglmulai;
    const tglselesai = req.body.tglselesai;
    const jeniscuti = req.body.jeniscuti;
    const alasan = req.body.alasan;
    const userid = req.body.userid;

    try {
        await SuratCuti.update({
            id: id,
            name: name,
            userid: userid,
            divisi: divisi,
            jatahcuti: jatahcuti,
            tglmulai: tglmulai,
            tglselesai: tglselesai,
            jeniscuti: jeniscuti,
            alasan: alasan
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

export const deleteSuratCuti = async (req, res) => {
    try {
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