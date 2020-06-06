module.exports = {


  friendlyName: 'Remove',


  description: 'Remove tipo vehiculo.',



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
        var tipos = await TipoVehiculo.findOne({ id });
        if (!tipos) {
          return this.res.notFound();
        }
        var tipoRemove = await TipoVehiculo.destroyOne({ id });
        if (tipoRemove) {
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
