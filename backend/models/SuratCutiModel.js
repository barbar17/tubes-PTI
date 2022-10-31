import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const DataTypes = Sequelize;

const SuratCuti = db.define('suratCuti', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
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
}, {
    freezeTableName: true
})

export default SuratCuti;

(async () => {
    await db.sync();
})();