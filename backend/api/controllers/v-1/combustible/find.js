module.exports = {


  friendlyName: 'Find',


  description: 'Find combustible.',

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
        let combustible = await Combustible.findOne({ id });
        if (!combustible) {
          return this.res.status(200).send({
            status: 0,
            body: null
          })
        }
        return this.res.status(200).send({
          status: 1,
          body: combustible
        })
      }
      let combustible = await Combustible.find();
      return this.res.status(200).send({
        status: 2,
        body: combustible
      })
    } catch (error) {
      sails.error(error);
      return this.res.serverError(error);
    }

  }

};
