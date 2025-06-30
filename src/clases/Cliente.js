const Usuario = require('./Usuario');

class Cliente extends Usuario {
  constructor(nombre, apellido, dni, salesforceUser, salesforcePassword, email, telefono) {
    super(nombre, apellido, dni, salesforceUser, salesforcePassword);
    this.email = email;
    this.telefono = telefono;
  }

  getDatosCliente() {
    return {
      nombre: this.nombre,
      apellido: this.apellido,
      dni: this.dni,
      email: this.email,
      telefono: this.telefono
    };
  }
}

module.exports = Cliente;
