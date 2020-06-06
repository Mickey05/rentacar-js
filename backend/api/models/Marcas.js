/**
 * Marcas.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    marca: {
      type: 'string',
      required: true,
      unique: true
    },
    descripcion: {
      type: 'string',
      required: true
    },
    estado: {
      type: 'string',
      required: true
    },
    modelo: {
      collection: 'modelos',
      via: 'marca'
    },
    vehiculo: {
      collection: 'vehiculos',
      via: 'marca'
    },
  },
};


