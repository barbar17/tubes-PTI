import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const DataTypes = Sequelize;

const Super = db.define('superadmin', {
    name: { type: DataTypes.STRING, allowNull: false },
    id: { type: DataTypes.STRING, primaryKey: true },
    ttl: { type: DataTypes.STRING, allowNull: false },
    jeniskelamin: { type: DataTypes.STRING, allowNull: false },
    agama: { type: DataTypes.STRING, allowNull: false },
    alamat: { type: DataTypes.STRING, allowNull: false },
    telepon: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    username: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    tipeakun: { type: DataTypes.STRING, allowNull: false },
    foto: { type: DataTypes.STRING },
    fotourl: { type: DataTypes.STRING },
    ttd: { type: DataTypes.STRING },
    ttdurl: { type: DataTypes.STRING }
}, {
    freezeTableName: true
})

export default Super;

(async () => {
    await db.sync();
})();