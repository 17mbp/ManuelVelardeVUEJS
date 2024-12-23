const { DataTypes } = require('sequelize');
const sequelize = require('./db');
const bcrypt = require('bcryptjs'); 

const Usuario = sequelize.define('Usuario', {
  correo_electronico: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,  
    },
  },
  contrasena: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

//Usuario.beforeCreate(async (usuario) => {
//  const salt = await bcrypt.genSalt(10); 
//  usuario.contrasena = await bcrypt.hash(usuario.contrasena, salt);  
//});

//Usuario.prototype.validarContrasena = async function (password) {
//  return bcrypt.compare(password, this.contrasena); 
//};

module.exports = Usuario;