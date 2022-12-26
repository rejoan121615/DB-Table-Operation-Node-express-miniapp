const { Sequelize } = require("sequelize");

const db = new Sequelize({
    username: "root",
    password: "121615",
    database: "mini-db-app",
    host: "localhost",
    dialect: "mysql",
});

module.exports = db;
