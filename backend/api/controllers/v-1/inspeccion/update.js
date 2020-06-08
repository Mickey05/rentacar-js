module.exports = {


  friendlyName: 'Update',


  description: 'Update inspeccion.',


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
        var inspeccion = await Inspeccion.findOne({ id });
        if (!inspeccion) {
          return this.res.notFound();
        }
        var inspeccionUpdated = await Inspeccion.updateOne({ id }).set(body);
        if (inspeccionUpdated) {
          return this.res.status(200).send({
            status: 1,
            body: inspeccionUpdated
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
