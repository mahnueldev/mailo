const Sequelize = require('sequelize');

const connectDB = new Sequelize('mailo_app', 'root', 'rootwck', {
  host: 'localhost',
  port: 3305,
  dialect: 'mysql',
});

module.exports = connectDB;
