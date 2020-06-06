module.exports = {


  friendlyName: 'Remove',


  description: 'Remove marca.',

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
        var marcas = await Marcas.findOne({ id });
        if (!marcas) {
          return this.res.notFound();
        }
        var marcaRemove = await Marcas.destroyOne({ id });
        if (marcaRemove) {
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
