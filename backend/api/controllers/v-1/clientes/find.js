module.exports = {


  friendlyName: 'Find',


  description: 'Find clientes.',


  inputs: {
    cedula: {
      type: 'string',
      required: false
    },
  },


  exits: {

  },

  fn: async function ({ cedula }) {

    try {
      if (cedula) {
        let cliente = await Clientes.findOne({ cedula });
        if (!cliente) {
          return this.res.status(200).send({
            status: 0,
            body: null
          })
        }
        return this.res.status(200).send({
          status: 1,
          body: cliente
        })
      }
      let cliente = await Clientes.find();
      return this.res.status(200).send({
        status: 2,
        body: cliente
      })
    } catch (error) {
      sails.error(error);
      return this.res.serverError(error);
    }

  }


};
