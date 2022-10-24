import Pegawai from "../models/PegawaiModel.js";

export const getPegawai = async (req, res) => {
    try {
        const response = await Pegawai.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}