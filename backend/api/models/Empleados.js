/**
 * Empleados.js
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
    clave: {
      type: 'string',
      required: true
    },
    tanda: {
      type: 'string',
      required: true
    },
    comision: {
      type: 'string',
      required: true
    },
    fechaIngreso: {
      type: 'string',
      required: true
    },
    estado: {
      type: 'string',
      required: true
    },
    inspeccion: {
      collection: 'inspeccion',
      via: 'empleado'
    },
    rentaDevolucion: {
      collection: 'rentaDevolucion',
      via: 'empleado'
    }  
  },

};
