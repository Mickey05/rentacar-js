module.exports = {


  friendlyName: 'Create',


  description: 'Create vehiculos.',

  inputs: {
    descripcion: {
      type: 'string',
      required: true
    },
    chasisNum: {
      type: 'string',
      required: true
    },
    motorNum: {
      type: 'string',
      required: true
    },
    placaNum: {
      type: 'string',
      required: true
    },
    tipo: {
      type: 'string',
      required: true
    },
    marca: {
      type: 'string',
      required: true
    },
    modelo: {
      type: 'string',
      required: true
    },
    combustible: {
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
    descripcion, chasisNum, motorNum, placaNum, tipo, marca, modelo, combustible, estado
  }) {
    try {
      var vehiculo = await Vehiculos.findOne({ placaNum });
      if (vehiculo) {
        return this.res.status(200).send({
          status: 0,
          message: "vehiculo existente",
          body: null
        });
      }
      var newVehiculo = await Vehiculos.create({
        descripcion, chasisNum, motorNum, placaNum, tipo, marca, modelo, combustible, estado
      }).fetch();
      if (newVehiculo) {
        return this.res.status(200).send({
          status: 1,
          message: "creado correctamente",
          body: newVehiculo
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
