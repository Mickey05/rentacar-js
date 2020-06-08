module.exports = {


  friendlyName: 'Update',


  description: 'Update vehiculos.',

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
        var Vehiculo = await Vehiculos.findOne({ id });
        if (!Vehiculo) {
          return this.res.notFound();
        }
        var VehiculosUpdated = await Vehiculos.updateOne({ id }).set(body);
        if (VehiculosUpdated) {
          return this.res.status(200).send({
            status: 1,
            body: VehiculosUpdated
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
