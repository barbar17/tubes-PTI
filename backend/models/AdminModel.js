import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const DataTypes = Sequelize;

const Admin = db.define('admin', {
    name: { type: DataTypes.STRING, allowNull: false },
    id: { type: DataTypes.STRING, primaryKey: true },
    ttl: { type: DataTypes.STRING },
    jeniskelamin: { type: DataTypes.STRING },
    divisi: { type: DataTypes.STRING, allowNull: false },
    agama: { type: DataTypes.STRING },
    alamat: { type: DataTypes.STRING },
    telepon: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    username: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    tipeakun: { type: DataTypes.STRING, allowNull: false },
    foto: { type: DataTypes.STRING },
    fotourl: { type: DataTypes.STRING },
    ttd: { type: DataTypes.STRING },
    ttdurl: { type: DataTypes.STRING },
    adminlvl: { type: DataTypes.STRING, allowNull: false }
}, {
    freezeTableName: true
})

export default Admin;

(async () => {
    await db.sync();
})();