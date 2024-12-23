const { DataTypes } = require('sequelize');
const sequelize = require('./db');

const Direcciones = sequelize.define('Direcciones', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  apellidopaterno: {
    type: DataTypes.STRING,
    allowNull: false
  },
  apellidomaterno: {
    type: DataTypes.STRING,
    allowNull: false
  },
  domicilio: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
});

module.exports = Direcciones;