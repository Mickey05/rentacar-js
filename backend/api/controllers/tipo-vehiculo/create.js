module.exports = {


  friendlyName: 'Create',


  description: 'Create tipo vehiculo.',



  inputs: {
    tipo: {
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
    tipo, descripcion, estado
  }) {
    try {
      var tipos = await TipoVehiculo.findOne({ tipo });
      if (tipos) {
        return this.res.status(200).send({
          status: 0,
          message: "Tipo de Vehiculo existente",
          body: null
        });
      }
      var newTipo = await TipoVehiculo.create({
        tipo, descripcion, estado
      }).fetch();
      if (newTipo) {
        return this.res.status(200).send({
          status: 1,
          message: "creado correctamente",
          body: newTipo
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
