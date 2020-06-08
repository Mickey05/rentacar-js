module.exports = {


  friendlyName: 'Update',


  description: 'Update clientes.',


  inputs: {
    id: {
      type: 'string',
      required: true
    },
    body: {
      type: 'ref',
      required: true
    }

  },


  exits: {

  },


  fn: async function ({ id, body}) {
    try {
      if (id) {
        var cliente = await Clientes.findOne({ id });
        if (!cliente) {
          return this.res.notFound();
        }
        var ClienteUpdated = await Clientes.updateOne({ id }).set(body);
        if (ClienteUpdated) {
          return this.res.status(200).send({
            status: 1,
            body: ClienteUpdated
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
