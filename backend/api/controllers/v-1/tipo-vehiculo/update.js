module.exports = {


  friendlyName: 'Update',


  description: 'Update tipo vehiculo.',


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
        var tipos = await TipoVehiculo.findOne({ id });
        if (!tipos) {
          return this.res.notFound();
        }
        var TipoUpdated = await TipoVehiculo.updateOne({ id }).set(body);
        if (TipoUpdated) {
          return this.res.status(200).send({
            status: 1,
            body: TipoUpdated
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
