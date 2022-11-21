import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const DataTypes = Sequelize;

const SuratCuti = db.define('suratCuti', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nosurat: { type: DataTypes.STRING },
    name: { type: DataTypes.STRING, allowNull: false },
    userid: { type: DataTypes.STRING, allowNull: false },
    divisi: { type: DataTypes.STRING, allowNull: false },
    jatahcuti: { type: DataTypes.STRING, allowNull: false },
    tglpengajuan: { type: DataTypes.DATEONLY },
    tglmulai: { type: DataTypes.DATEONLY },
    tglselesai: { type: DataTypes.DATEONLY },
    jeniscuti: { type: DataTypes.STRING, allowNull: false },
    alasan: { type: DataTypes.STRING, allowNull: false },
    status: { type: DataTypes.STRING, allowNull: false },
    komentar: { type: DataTypes.TEXT },
    file: { type: DataTypes.STRING },
    fileurl: { type: DataTypes.STRING },
    status: { type: DataTypes.STRING },
    ttdpegawai: { type: DataTypes.STRING },
    admin1: { type: DataTypes.STRING },
    ttdadmin1: { type: DataTypes.STRING },
    admin2: { type: DataTypes.STRING },
    ttdadmin2: { type: DataTypes.STRING },
    super: { type: DataTypes.STRING },
    ttdsuper: { type: DataTypes.STRING }
}, {
    freezeTableName: true
})

export default SuratCuti;

(async () => {
    await db.sync();
})();