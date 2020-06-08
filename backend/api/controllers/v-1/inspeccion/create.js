module.exports = {


  friendlyName: 'Create',


  description: 'Create inspeccion.',


  inputs: {

    vehiculo: {
      type: 'string',
      required: true
    },
    cliente: {
      type: 'string',
      required: true
    },
    ralladuras: {
      type: 'string',
      required: true
    },
    combustible: {
      type: 'string',
      required: true
    },
    respuesta: {
      type: 'string',
      required: true
    },
    gato: {
      type: 'string',
      required: true
    },
    rotura: {
      type: 'string',
      required: true
    },
    estadoGomas: {
      type: 'ref',
      required: true
    },
    fecha: {
      type: 'string',
      required: true
    },
    empleado: {
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
    vehiculo, cliente, ralladuras, combustible, respuesta, gato, rotura, estadoGomas, fecha, empleado, estado
  }) {
    try {
      var inspeccion = await Inspeccion.findOne({ 
        vehiculo: vehiculo,
        cliente: cliente
       });
      if (inspeccion) {
        return this.res.status(200).send({
          status: 0,
          message: "inspeccion existente",
          body: null
        });
      }
      var newInspeccion = await Inspeccion.create({
        vehiculo, cliente, ralladuras, combustible, respuesta, gato, rotura, estadoGomas, fecha, empleado, estado
      }).fetch();
      if (newInspeccion) {
        return this.res.status(200).send({
          status: 1,
          message: "creado correctamente",
          body: newInspeccion
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