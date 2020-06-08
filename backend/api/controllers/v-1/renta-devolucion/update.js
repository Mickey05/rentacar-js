module.exports = {


  friendlyName: 'Update',


  description: 'Update renta devolucion.',

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
        var rentaDevolucion = await RentaDevolucion.findOne({ id });
        if (!rentaDevolucion) {
          return this.res.notFound();
        }
        var RentDevUpdated = await RentaDevolucion.updateOne({ id }).set(body);
        if (RentDevUpdated) {
          return this.res.status(200).send({
            status: 1,
            body: RentDevUpdated
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
