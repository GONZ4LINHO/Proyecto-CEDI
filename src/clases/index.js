require('dotenv').config();

const Usuario = require('./clases/Usuario');
const SalesforceConnection = require('./conexion/SalesforceConnection');

// Creamos usuario con datos del .env
const usuario = new Usuario(
  'Profesor', 
  'CEDI', 
  '00000000', 
  process.env.SALESFORCE_USER, 
  process.env.SALESFORCE_PASSWORD
);

(async () => {
  const sf = new SalesforceConnection(usuario);

  try {
    const conn = await sf.conectar();
    const info = await conn.identity();
    console.log('✅ Conexión correcta. Info del usuario:', info);
  } catch (err) {
    console.error('❌ Error en conexión:', err.message);
  }
})();
