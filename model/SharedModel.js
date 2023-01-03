const db = require("../db/db");
const { DataTypes } = require("sequelize");

const SharedModel = db.define("visys_shared_details", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    visys_dc_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    visys_dc_location: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    visys_dc_url: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    visys_dc_port: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    visys_dc_status: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    visys_dc_flag: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

module.exports = SharedModel;
