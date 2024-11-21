const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Good = sequelize.define('Good', {
    name: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING },
    price: { type: DataTypes.FLOAT, allowNull: false },
});

module.exports = Good;
