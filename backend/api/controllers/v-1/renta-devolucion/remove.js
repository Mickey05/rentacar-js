module.exports = {


  friendlyName: 'Remove',


  description: 'Remove renta devolucion.',


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
        var rentaDevolucion = await RentaDevolucion.findOne({ id });
        if (!rentaDevolucion) {
          return this.res.notFound();
        }
        var RentDevRemove = await RentaDevolucion.destroyOne({ id });
        if (RentDevRemove) {
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
