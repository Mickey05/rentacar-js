module.exports = {


  friendlyName: 'Create',


  description: 'Create combustible.',

  inputs: {
    combustible: {
      type: 'string',
      required: true
    },
    descripcion: {
      type: 'string',
      required: true
    },
    estado: {
      type: 'string',
      required: true
    }
  },


  exits: {

  },




  fn: async function ({
    combustible, descripcion, estado
  }) {
    try {
      var tipoCombustible = await Combustible.findOne({ combustible });
      if (tipoCombustible) {
        return this.res.status(200).send({
          status: 0,
          message: "Tipo de combustible existente",
          body: null
        });
      }
      var newCombustible = await Combustible.create({
        combustible, descripcion, estado
      }).fetch();
      if (newCombustible) {
        return this.res.status(200).send({
          status: 1,
          message: "creado correctamente",
          body: newCombustible
        });
      }
      return this.res.status(200).send({
        status: 2,
        message: "No fue posible crearlo",
        body: null
      });
    } catch (err) {
      sails.log(err);
      return this.res.serverError(err);

    }
    return;

  }


};
