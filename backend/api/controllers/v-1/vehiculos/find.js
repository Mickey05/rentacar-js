module.exports = {


  friendlyName: 'Find',


  description: 'Find vehiculos.',

  inputs: {
    placaNum: {
      type: 'string',
      required: false
    },
  },


  exits: {

  },

  fn: async function ({ placaNum }) {

    try {
      if (placaNum) {
        let vehiculo = await Vehiculos.findOne({ placaNum }).populate('tipo').populate('marca').populate('modelo').populate('combustible');
        if (!vehiculo) {
          return this.res.status(200).send({
            status: 0,
            body: null
          })
        }
        return this.res.status(200).send({
          status: 1,
          body: vehiculo
        })
      }
      let vehiculo = await Vehiculos.find().populate('tipo').populate('marca').populate('modelo').populate('combustible');
      return this.res.status(200).send({
        status: 2,
        body: vehiculo
      })
    } catch (error) {
      console.log(error);
      return this.res.serverError(error);
    }

  }

};
