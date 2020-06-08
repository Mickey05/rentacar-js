module.exports = {


  friendlyName: 'Update',


  description: 'Update empleados.',


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
        var empleado = await Empleados.findOne({ id });
        if (!empleado) {
          return this.res.notFound();
        }
        var empleadoUpdated = await Empleados.updateOne({ id }).set(body);
        if (empleadoUpdated) {
          return this.res.status(200).send({
            status: 1,
            body: empleadoUpdated
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
