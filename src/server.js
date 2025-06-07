require('dotenv').config();
const express = require('express');
const Usuario = require('./clases/Usuario');
const SalesforceConnection = require('./conexion/SalesforceConnection');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/salesforce/conectar', async (req, res) => {
  const usuario = new Usuario(
    'Profesor',
    'CEDI',
    '00000000',
    process.env.SALESFORCE_USER,
    process.env.SALESFORCE_PASSWORD
  );

  const sf = new SalesforceConnection(usuario);

  try {
    const conn = await sf.conectar();
    const info = await conn.identity();

    res.status(200).json({
      mensaje: '✅ Conexión exitosa a Salesforce',
      usuarioSalesforce: info
    });
  } catch (error) {
    res.status(500).json({
      mensaje: '❌ Error al conectar con Salesforce',
      error: error.message
    });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
