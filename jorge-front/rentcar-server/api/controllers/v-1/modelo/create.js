module.exports = {


  friendlyName: 'Create',


  description: 'Create modelo.',

  inputs: {
    modelo: {
      type: 'string',
      required: true
    },
    marca: {
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
    modelo, marca, descripcion, estado
  }) {
    try {
      var modelos = await Modelos.findOne({ modelo });
      if (modelos) {
        return this.res.status(200).send({
          status: 0,
          message: "modelo existente",
          body: null
        });
      }
      var newModelo = await Modelos.create({
        modelo, marca, descripcion, estado
      }).fetch();
      if (newModelo) {
        return this.res.status(200).send({
          status: 1,
          message: "creado correctamente",
          body: newModelo
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
