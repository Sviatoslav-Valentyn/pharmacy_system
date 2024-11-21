const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('pharmacy_system', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;
