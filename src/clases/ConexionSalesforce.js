const jsforce = require('jsforce'); //Definimos la librería jsforce para conectar con Salesforce

class SalesforceConnection {
  constructor(usuario) {
    this.usuario = usuario;
    this.conn = null;
  }

  async conectar() {
    try {
      this.conn = new jsforce.Connection({
        loginUrl: 'https://centroeducativodeinformatic-dev-ed.develop.my.salesforce.com/?ec=302&startURL=%2Fvisualforce%2Fsession%3Furl%3Dhttps%253A%252F%252Fcentroeducativodeinformatic-dev-ed.develop.lightning.force.com%252Flightning%252Fpage%252Fhome ' // URL de login de Salesforce
      });

      await this.conn.login(this.usuario.salesforceUser, this.usuario.salesforcePassword);
      console.log('✅ Conexión exitosa a Salesforce');

      return this.conn;
    } catch (error) {
      console.error('❌ Error al conectar a Salesforce:', error);
      throw error;
    }
  }

  getConexion() {
    return this.conn;
  }
}

module.exports = SalesforceConnection;
