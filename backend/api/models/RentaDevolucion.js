/**
 * RentaDevolucion.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    NoRenta: {
      type: 'string',
      required: true,
      unique: true
    },
    empleado: {
      model: 'empleados',
      required: true
    },
    vehiculo: {
      model: 'vehiculos',
      required: true
    },
    cliente: {
      model: 'clientes',
      required: true
    },
    fechaRenta: {
      type: 'string',
      required: true
    },
    fechaDevolucion: {
      type: 'string',
      required: true
    },
    montoXdia: {
      type: 'string',
      required: true
    },
    cantidadDias: {
      type: 'number',
      required: true
    },
    comentario: {
      type: 'string',
      required: true
    },
    estado: {
      type: 'string',
      required: true
    }
  },

};

