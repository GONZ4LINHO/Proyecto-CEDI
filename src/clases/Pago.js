const Cliente = require('./Cliente');

class Pago extends Cliente {
  constructor(nombre, apellido, dni, salesforceUser, salesforcePassword, email, telefono) {
    super(nombre, apellido, dni, salesforceUser, salesforcePassword, email, telefono);
    this.pagosRealizados = [];
  }

  registrarPago(monto, metodo, fecha = new Date()) {
    const pago = {
      monto,
      metodo,
      fecha
    };
    this.pagosRealizados.push(pago);
    console.log(`✅ Pago registrado para ${this.nombre}: $${monto} (${metodo})`);
  }

  verPagos() {
    return this.pagosRealizados;
  }
}

module.exports = Pago;
