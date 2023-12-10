const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "mysql",
  database: "node-expense-sql",
  host: "localhost",
  username: "root",
  password: "tvicky.123",
});

module.exports = sequelize;
