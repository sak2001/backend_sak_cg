const sequelize = require("sequelize");

const seql = new sequelize("users", "root", "", {
  host: "127.0.0.1",
  dialect: "mysql",
  operatorAliases: false,
});

module.exports = seql;
global.sequelize = seql;
