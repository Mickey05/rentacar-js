module.exports = {


  friendlyName: 'Remove',


  description: 'Remove combustible.',

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
        var combustible = await Combustible.findOne({ id });
        if (!combustible) {
          return this.res.notFound();
        }
        var combustibleRemove = await Combustible.destroyOne({ id });
        if (combustibleRemove) {
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
