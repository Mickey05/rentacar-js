module.exports = {


  friendlyName: 'Remove',


  description: 'Remove modelo.',

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
        var modelos = await Modelos.findOne({ id });
        if (!modelos) {
          return this.res.notFound();
        }
        var modeloRemove = await Modelos.destroyOne({ id });
        if (modeloRemove) {
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
