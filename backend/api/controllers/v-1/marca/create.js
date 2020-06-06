module.exports = {


  friendlyName: 'Create',


  description: 'Create marca.',

  inputs: {
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
    marca, descripcion, estado
  }) {
    try {
      var marcas = await Marcas.findOne({ marca });
      if (marcas) {
        return this.res.status(200).send({
          status: 0,
          message: "Tipo de Marca existente",
          body: null
        });
      }
      var newMarca = await Marcas.create({
        marca, descripcion, estado
      }).fetch();
      if (newMarca) {
        return this.res.status(200).send({
          status: 1,
          message: "creado correctamente",
          body: newMarca
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