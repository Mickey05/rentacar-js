/**
 * Inspeccion.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    vehiculo: {
      model: 'vehiculos',
      required: true
    },
    cliente: {
      model: 'clientes',
      required: true
    },
    ralladuras: {
      type: 'string',
      required: true
    },
    combustible: {
      type: 'string',
      required: true
    },
    respuesta: {
      type: 'string',
      required: true
    },
    gato: {
      type: 'string',
      required: true
    },
    rotura: {
      type: 'string',
      required: true
    },
    estadoGomas: {
      type: 'ref',
      required: true
    },
    fecha: {
      type: 'string',
      required: true
    },
    empleado: {
      model: 'empleados',
      required: true
    },
    estado: {
      type: 'string',
      required: true
    }
  },

};

