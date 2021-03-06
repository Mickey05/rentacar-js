module.exports = {


  friendlyName: 'Find',


  description: 'Find renta devolucion.',


  inputs: {
    NoRenta: {
      type: 'string',
      required: false
    },
    vehiculo: {
      type: 'string',
      required: false
    },
    estado: {
      type: 'string',
      required: false
    }
  },


  exits: {

  },

  fn: async function ({ NoRenta, vehiculo, estado }) {

    try {
      if (vehiculo && estado) {        
        let rentaDevolucion = await RentaDevolucion.findOne({ 
          vehiculo: vehiculo,
          estado: estado }).populate('vehiculo').populate('cliente').populate('empleado');
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
      if (NoRenta) {
        let rentaDevolucion = await RentaDevolucion.findOne({ NoRenta }).populate('vehiculo').populate('cliente').populate('empleado');
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
