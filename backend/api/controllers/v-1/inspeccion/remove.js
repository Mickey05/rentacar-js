module.exports = {


  friendlyName: 'Remove',


  description: 'Remove inspeccion.',


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
        var inspeccion = await Inspeccion.findOne({ id });
        if (!inspeccion) {
          return this.res.notFound();
        }
        var inspeccionRemove = await Inspeccion.destroyOne({ id });
        if (inspeccionRemove) {
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
