module.exports = {


  friendlyName: 'Remove',


  description: 'Remove vehiculos.',


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
        var Vehiculo = await Vehiculos.findOne({ id });
        if (!Vehiculo) {
          return this.res.notFound();
        }
        var VehiculosRemove = await Vehiculos.destroyOne({ id });
        if (VehiculosRemove) {
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
