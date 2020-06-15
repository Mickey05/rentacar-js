module.exports = {


  friendlyName: 'Create',


  description: 'Create empleados.',


  inputs: {
    nombre: {
      type: 'string',
      required: true
    },
    cedula: {
      type: 'string',
      required: true
    },
    clave: {
      type: 'string',
      required: true
    },
    tanda: {
      type: 'string',
      required: true
    },
    comision: {
      type: 'string',
      required: true
    },
    fechaIngreso: {
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
    nombre, cedula, clave, tanda, comision, fechaIngreso, estado
  }) {
    try {
      var empleado = await Empleados.findOne({ cedula });
      if (empleado) {
        return this.res.status(200).send({
          status: 0,
          message: "empleado existente",
          body: null
        });
      }
      var newEmpleado = await Empleados.create({
        nombre, cedula, clave, tanda, comision, fechaIngreso, estado
      }).fetch();
      if (newEmpleado) {
        return this.res.status(200).send({
          status: 1,
          message: "creado correctamente",
          body: newEmpleado
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