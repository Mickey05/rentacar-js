module.exports = {


  friendlyName: 'Find',


  description: 'Find empleados.',


  inputs: {
    cedula: {
      type: 'string',
      required: false
    },
    clave: {
      type: 'string',
      required: false
    },
  },


  exits: {

  },

  fn: async function ({ cedula, clave }) {

    try {
      if (cedula) {
        let empleado = await Empleados.findOne({ cedula });
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
      if (cedula && clave) {
        let empleado = await Empleados.findOne({ cedula: cedula, clave: clave });
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
