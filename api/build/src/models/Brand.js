"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize) => {
    sequelize.define("Brand", {
        name: {
            type: sequelize_1.DataTypes.STRING(20),
            primaryKey: true,
            allowNull: false,
            unique: true,
        },
        logo_url: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
        }
    });
};
