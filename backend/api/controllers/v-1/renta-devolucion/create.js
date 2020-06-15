module.exports = {


  friendlyName: 'Create',


  description: 'Create renta devolucion.',


  inputs: {
    NoRenta: {
      type: 'string',
      required: true
    },
    empleado: {
      type: 'string',
      required: true
    },
    vehiculo: {
      type: 'string',
      required: true
    },
    cliente: {
      type: 'string',
      required: true
    },
    fechaRenta: {
      type: 'string',
      required: true
    },
    fechaDevolucion: {
      type: 'string',
      required: true
    },
    montoXdia: {
      type: 'string',
      required: true
    },
    cantidadDias: {
      type: 'string',
      required: true
    },
    comentario: {
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
    NoRenta, empleado, vehiculo, cliente, fechaRenta, fechaDevolucion, montoXdia, cantidadDias, comentario, estado
  }) {
    try {
      var rentaDevolucion = await RentaDevolucion.findOne({ 
        NoRenta: NoRenta,
        cliente: cliente,
        estado: estado});
      if (rentaDevolucion) {
        return this.res.status(200).send({
          status: 0,
          message: "renta existente",
          body: null
        });
      }
      var newRentDev = await RentaDevolucion.create({
        NoRenta, empleado, vehiculo, cliente, fechaRenta, fechaDevolucion, montoXdia, cantidadDias, comentario, estado
      }).fetch();
      if (newRentDev) {
        return this.res.status(200).send({
          status: 1,
          message: "creado correctamente",
          body: newRentDev
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