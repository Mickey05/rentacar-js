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
        let modelos = await Modelos.findOne({ id }).populate('marca');
        if (!modelos) {
          return this.res.status(200).send({
            status: 0,
            body: null
          })
        }
        return this.res.status(200).send({
          status: 1,
          body: modelos
        })
      }
      let modelos = await Modelos.find().populate('marca');
      return this.res.status(200).send({
        status: 2,
        body: modelos
      })
    } catch (error) {
      sails.error(error);
      return this.res.serverError(error);
    }

  }

};
