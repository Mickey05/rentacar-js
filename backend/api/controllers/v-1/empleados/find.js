module.exports = {


  friendlyName: 'Find',


  description: 'Find empleados.',


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
        let empleado = await Empleados.findOne({ id });
        if (!empleado) {
          return this.res.status(200).send({
            status: 0,
            body: null
          })
        }
        return this.res.status(200).send({
          status: 1,
          body: empleado
        })
      }
      let empleado = await Empleados.find();
      return this.res.status(200).send({
        status: 2,
        body: empleado
      })
    } catch (error) {
      sails.error(error);
      return this.res.serverError(error);
    }

  }


};
