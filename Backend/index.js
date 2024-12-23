const express = require('express');
const bodyParser = require('body-parser');
const Cliente = require('./models/direcciones');
const Usuario = require('./models/usuario');
const sequelize = require('./models/db');

const cors = require('cors');

const auth = require('./models/seguridad');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
const port = 3000;
app.use(cors());
app.use(bodyParser.json());

app.post('/login', async (req, res) => {
	const { username, password } = req.body; 
  try {  
    const usuario = await Usuario.findOne({ where: { correo_electronico: username } });
	 
   /* if (!usuario) {
      return res.status(400).json({ message: 'ACorreo electrónico o contraseña incorrectos' });
    }
   
    const esValido = await usuario.validarContrasena(password);
    if (!esValido) {
      return res.status(400).json({ message: 'BCorreo electrónico o contraseña incorrectos' });
    }  */
  
    const token = jwt.sign({ correo_electronico: usuario.correo_electronico }, process.env.JWT_SECRET, { expiresIn: '15h' });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: 'CError en el login' });
  }
});

app.post('/direcciones', auth, async (req, res) => {
  try {
    const cliente = await Cliente.create(req.body);
    res.status(201).json(cliente);
  } catch (err) {
    res.status(400).json({ error: 'Error al crear cliente' });
  }
});

app.get('/direcciones', auth, async (req, res) => {
  try {
    const direcciones = await Cliente.findAll();
    res.json(direcciones);
  } catch (err) {
    res.status(400).json({ error: 'Error al obtener direcciones' });
  }
});

app.get('/direcciones/:id', auth, async (req, res) => {
  try {
    const cliente = await Cliente.findByPk(req.params.id);
    if (!cliente) {
      return res.status(404).json({ error: 'Cliente no encontrado' });
    }
    res.json(cliente);
  } catch (err) {
    res.status(400).json({ error: 'Error al obtener cliente' });
  }
});
 
app.put('/direcciones/:id', auth, async (req, res) => {
  try {
    const cliente = await Cliente.findByPk(req.params.id);
    if (!cliente) {
      return res.status(404).json({ error: 'Cliente no encontrado' });
    }
    await cliente.update(req.body);
    res.json(cliente);
  } catch (err) {
    res.status(400).json({ error: 'Error al actualizar cliente' });
  }
});

app.delete('/direcciones/:id', auth, async (req, res) => {
  try {
    const cliente = await Cliente.findByPk(req.params.id);
    if (!cliente) {
      return res.status(404).json({ error: 'Cliente no encontrado' });
    }
    await cliente.destroy();
    res.status(204).send();
  } catch (err) {
    res.status(400).json({ error: 'Error al eliminar cliente' });
  }
});
 
sequelize.sync({ force: false }).then(() => {
  app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
  });
});