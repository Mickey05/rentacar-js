module.exports = {


  friendlyName: 'Find',


  description: 'Find tipo vehiculo.',


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
        let tipo = await TipoVehiculo.findOne({ id });
        if (!tipo) {
          return this.res.status(200).send({
            status: 0,
            body: null
          })
        }
        return this.res.status(200).send({
          status: 1,
          body: tipo
        })
      }
      let tipo = await TipoVehiculo.find();
      return this.res.status(200).send({
        status: 2,
        body: tipo
      })
    } catch (error) {
      sails.error(error);
      return this.res.serverError(error);
    }

  }


};
