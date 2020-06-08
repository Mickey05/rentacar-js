module.exports = {


  friendlyName: 'Remove',


  description: 'Remove clientes.',

  inputs: {
    id: {
      type: 'string',
      required: true
    }

  },


  exits: {

  },


  fn: async function ({ id }) {

    try {
      if (id) {
        var cliente = await Clientes.findOne({ id });
        if (!cliente) {
          return this.res.notFound();
        }
        var clienteRemove = await Clientes.destroyOne({ id });
        if (clienteRemove) {
          return this.res.status(200).send({
            status: 1,
            body: null
          })
        }
        return this.res.status(200).send({
          status: 2,
          body: null
        })
      }
      return this.res.notFound();
    } catch (error) {
      sails.error(error);
      return this.res.serverError(error);
    }

  }

};
