/**
 * Modelos.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    modelo: {
      type: 'string',
      required: true,
      unique: true
    },
    marca: {
      model: 'marcas',
      required: true
    },
    descripcion: {
      type: 'string',
      required: true
    },
    estado: {
      type: 'string',
      required: true
    },
    vehiculo: {
      collection: 'vehiculos',
      via: 'modelo'
    }    
  },

};

