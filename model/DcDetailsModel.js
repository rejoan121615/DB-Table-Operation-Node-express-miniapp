const db = require("../db/db");
const { DataTypes } = require("sequelize");

const DcDetailsModel = db.define("visys_dc_details", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    dc_id: {
        type: DataTypes.INTEGER,
    },
    dc_location: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    dc_url: {
        type: DataTypes.STRING,
    },
    dc_port: {
        type: DataTypes.STRING,
    },
    dc_status: {
        type: DataTypes.STRING,
    },
    dc_flag: {
        type: DataTypes.STRING,
    },
});

module.exports = DcDetailsModel;
