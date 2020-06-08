module.exports = {


  friendlyName: 'Find',


  description: 'Find renta devolucion.',


  inputs: {
    id: {
      type: 'string',
      required: false
    }
  },


  exits: {

  },

  fn: async function ({ id }) {

    try {
      if (id) {
        let rentaDevolucion = await RentaDevolucion.findOne({ id }).populate('vehiculo').populate('cliente').populate('empleado');
        if (!rentaDevolucion) {
          return this.res.status(200).send({
            status: 0,
            body: null
          })
        }
        return this.res.status(200).send({
          status: 1,
          body: rentaDevolucion
        })
      }
      let rentaDevolucion = await RentaDevolucion.find().populate('vehiculo').populate('cliente').populate('empleado');;
      return this.res.status(200).send({
        status: 2,
        body: rentaDevolucion
      })
    } catch (error) {
      sails.error(error);
      return this.res.serverError(error);
    }

  }


};
