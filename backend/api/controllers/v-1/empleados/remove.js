module.exports = {


  friendlyName: 'Remove',


  description: 'Remove empleados.',


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
        var empleado = await Empleados.findOne({ id });
        if (!empleado) {
          return this.res.notFound();
        }
        var empleadoRemove = await Empleados.destroyOne({ id });
        if (empleadoRemove) {
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
