require('dotenv').config();

const Pago = require('./clases/Pago');
const SalesforceConnection = require('./conexion/SalesforceConnection');

const clientePago = new Pago(
  'Juan',
  'Pérez',
  '12345678',
  process.env.SALESFORCE_USER,
  process.env.SALESFORCE_PASSWORD,
  'juan.perez@example.com',
  '+54 9 11 1234-5678'
);

(async () => {
  const sf = new SalesforceConnection(clientePago);

  try {
    const conn = await sf.conectar();
    const info = await conn.identity();
    console.log('✅ Conexión correcta. Info del usuario:', info);

    // Ejemplo: registrar pagos
    clientePago.registrarPago(15000, 'Transferencia');
    clientePago.registrarPago(25000, 'Tarjeta de crédito');

    console.log('📋 Pagos registrados:', clientePago.verPagos());
  } catch (err) {
    console.error('❌ Error en conexión:', err.message);
  }
})();
