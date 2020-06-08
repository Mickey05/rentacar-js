/**
 * Clientes.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombre: {
      type: 'string',
      required: true
    },
    cedula: {
      type: 'string',
      required: true,
      unique: true
    },
    tarjeta: {
      type: 'string',
      required: true
    },
    limiteCredito: {
      type: 'string',
      required: true
    },
    tipoPersona: {
      type: 'string',
      required: true
    },
    estado: {
      type: 'string',
      required: true
    },
    inspeccion: {
      collection: 'inspeccion',
      via: 'cliente'
    },
    rentaDevolucion: {
      collection: 'rentaDevolucion',
      via: 'cliente'
    }     
  },

};
