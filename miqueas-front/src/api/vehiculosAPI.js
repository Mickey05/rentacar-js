import axios from 'axios';
const destino = "http://localhost";
const port = "1337";
export default {

  async create(vehiculo) {
    let response = await axios.post(`${destino}:${port}/v1/vehiculo/create`, vehiculo)

    return response;
  },

  async getVehiculos() {
    let response = await axios.get(`${destino}:${port}/v1/vehiculo/`)

    return response.data.body;
  },

  async delete(id) {
    let response = await axios.delete(`${destino}:${port}/v1/vehiculo/remove/`+id)

    return response;
  },

  async edit(id, body) {
    let response = await axios.put(`${destino}:${port}/v1/vehiculo/update/`+id, body)

    return response;
  },
}