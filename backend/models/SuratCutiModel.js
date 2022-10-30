import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const DataTypes = Sequelize;

const SuratCuti = db.define('suratCuti', {
    name: { type: DataTypes.STRING, allowNull: false },
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    divisi: { type: DataTypes.STRING, allowNull: false },
    jatahcuti: { type: DataTypes.STRING, allowNull: false },
    tglmulai: { type: DataTypes.DATE },
    tglselesai: { type: DataTypes.DATE },
    jeniscuti: { type: DataTypes.STRING, allowNull: false },
    alasan: { type: DataTypes.TEXT, allowNull: false },
}, {
    freezeTableName: true
})

export default SuratCuti;

(async () => {
    await db.sync();
})();