module.exports = {


  friendlyName: 'Update',


  description: 'Update marca.',


  inputs: {
    id: {
      type: 'string',
      required: true
    },
    body: {
      type: 'ref',
      required: true
    }

  },


  exits: {

  },


  fn: async function ({ id, body}) {
    try {
      if (id) {
        var marcas = await Marcas.findOne({ id });
        if (!marcas) {
          return this.res.notFound();
        }
        var marcaUpdated = await Marcas.updateOne({ id }).set(body);
        if (marcaUpdated) {
          return this.res.status(200).send({
            status: 1,
            body: marcaUpdated
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
