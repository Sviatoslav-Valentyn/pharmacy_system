const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Pharmacy = sequelize.define('Pharmacy', {
    name: { type: DataTypes.STRING, allowNull: false },
    street: { type: DataTypes.STRING, allowNull: false },
});

module.exports = Pharmacy;
