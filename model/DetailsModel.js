const db = require("../db/db");
const { DataTypes } = require("sequelize");

const DetailsModel = db.define("visys_details", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    visys_name: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    visys_url: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    visys_port: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    visys_user_name: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    visys_user_password: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    visys_flag: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    visys_shell_url: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
});

module.exports = DetailsModel;
