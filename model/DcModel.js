const db = require("../db/db");
const { DataTypes } = require("sequelize");

const DcModel = db.define("visys_dc_details", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    visys_dc_id: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    visys_dc_location: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    visys_dc_url: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    visys_dc_port: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    visys_dc_status: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    visys_dc_flag: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
});

module.exports = DcModel;
