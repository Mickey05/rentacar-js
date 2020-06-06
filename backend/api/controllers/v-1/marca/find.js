module.exports = {


  friendlyName: 'Find',


  description: 'Find marca.',

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
        let marcas = await Marcas.findOne({ id });
        if (!marcas) {
          return this.res.status(200).send({
            status: 0,
            body: null
          })
        }
        return this.res.status(200).send({
          status: 1,
          body: marcas
        })
      }
      let marcas = await Marcas.find();
      return this.res.status(200).send({
        status: 2,
        body: marcas
      })
    } catch (error) {
      sails.error(error);
      return this.res.serverError(error);
    }

  }


};
