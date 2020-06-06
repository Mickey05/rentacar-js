/**
 * Vehiculos.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    descripcion: {
      type: 'string',
      required: true
    },
    chasisNum: {
      type: 'string',
      required: true
    },
    motorNum: {
      type: 'string',
      required: true
    },
    placaNum: {
      type: 'string',
      required: true,
      unique: true
    },
    tipo: {
      model: 'tipoVehiculo',
      required: true
    },
    marca: {
      model: 'marcas',
      required: true
    },
    modelo: {
      model: 'modelos',
      required: true
    },
    combustible: {
      model: 'combustible',
      required: true
    },
    estado: {
      type: 'string',
      required: true
    },
  },

};

