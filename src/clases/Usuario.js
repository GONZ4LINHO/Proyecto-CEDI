class Usuario {
  constructor(nombre, apellido, dni, salesforceUser, salesforcePassword) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
    this.salesforceUser = salesforceUser;
    this.salesforcePassword = salesforcePassword;
  }

  // Mostrar solo info segura (sin contraseña)
  getInfo() {
    return {
      nombre: this.nombre,
      salesforceUser: this.salesforceUser
    };
  }
}

module.exports = Usuario;
