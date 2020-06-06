module.exports = {


  friendlyName: 'Update',


  description: 'Update combustible.',

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
        var combustible = await Combustible.findOne({ id });
        if (!combustible) {
          return this.res.notFound();
        }
        var CombustibleUpdated = await Combustible.updateOne({ id }).set(body);
        if (CombustibleUpdated) {
          return this.res.status(200).send({
            status: 1,
            body: CombustibleUpdated
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
