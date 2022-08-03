import { DataTypes } from "sequelize";

module.exports = (sequelize: any) => {
    sequelize.define("Brand", {
        name: {
            type: DataTypes.STRING(20),
            primaryKey: true,
            allowNull: false,
            unique: true,
        },
        logo_url: {
            type: DataTypes.TEXT,
            allowNull: false,
        }
    })
}