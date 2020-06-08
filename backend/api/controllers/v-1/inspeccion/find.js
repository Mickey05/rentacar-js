module.exports = {


  friendlyName: 'Find',


  description: 'Find inspeccion.',


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
        let inspeccion = await Inspeccion.findOne({ id }).populate('vehiculo').populate('cliente').populate('empleado');
        if (!inspeccion) {
          return this.res.status(200).send({
            status: 0,
            body: null
          })
        }
        return this.res.status(200).send({
          status: 1,
          body: inspeccion
        })
      }
      let inspeccion = await Inspeccion.find().populate('vehiculo').populate('cliente').populate('empleado');;
      return this.res.status(200).send({
        status: 2,
        body: inspeccion
      })
    } catch (error) {
      sails.error(error);
      return this.res.serverError(error);
    }

  }


};
