module.exports = {


  friendlyName: 'Update',


  description: 'Update modelo.',


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
        var modelos = await Modelos.findOne({ id });
        if (!modelos) {
          return this.res.notFound();
        }
        var modeloUpdated = await Modelos.updateOne({ id }).set(body);
        if (modeloUpdated) {
          return this.res.status(200).send({
            status: 1,
            body: modeloUpdated
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
