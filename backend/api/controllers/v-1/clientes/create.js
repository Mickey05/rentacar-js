module.exports = {


  friendlyName: 'Create',


  description: 'Create clientes.',

  inputs: {
    nombre: {
      type: 'string',
      required: true
    },
    cedula: {
      type: 'string',
      required: true
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
    }
  },


  exits: {

  },

  fn: async function ({
    nombre, cedula, tarjeta, limiteCredito, tipoPersona, estado
  }) {
    try {
      var cliente = await Clientes.findOne({ cedula });
      if (cliente) {
        return this.res.status(200).send({
          status: 0,
          message: "cliente existente",
          body: null
        });
      }
      var newCliente = await Clientes.create({
        nombre, cedula, tarjeta, limiteCredito, tipoPersona, estado
      }).fetch();
      if (newCliente) {
        return this.res.status(200).send({
          status: 1,
          message: "creado correctamente",
          body: newCliente
        });
      }
      return this.res.status(200).send({
        status: 2,
        message: "No fue posible crearlo",
        body: null
      });
    } catch (err) {
      sails.log(err);
      return this.res.serverError(err);

    }
    return;

  }
};