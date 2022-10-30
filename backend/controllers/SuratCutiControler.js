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

export const createSuratCuti = async (req, res) => {
    const name = req.body.name;
    const id = req.body.id;
    const divisi = req.body.divisi;
    const jatahcuti = req.body.jatahcuti;
    const tglmulai = req.body.tglmulai;
    const tglslsai = req.body.tglslsai;
    const jeniscuti = req.body.jeniscuti;
    const alasan = req.body.alasan;

    try {
        await SuratCuti.create({
            name: name,
            id: id,
            divisi: divisi,
            jatahcuti: jatahcuti,
            tglmulai: tglmulai,
            tglslsai: tglslsai,
            jeniscuti: jeniscuti,
            alasan: alasan
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
    const tglslsai = req.body.tglslsai;
    const jeniscuti = req.body.jeniscuti;
    const alasan = req.body.alasan;

    try {
        await SuratCuti.update({
            name: name,
            id: id,
            divisi: divisi,
            jatahcuti: jatahcuti,
            tglmulai: tglmulai,
            tglslsai: tglslsai,
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
        res.status(202).json({ msg: "User Deleted" });
    } catch (error) {
        console.log(error.message);
    }
}