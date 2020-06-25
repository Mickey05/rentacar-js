import axios from 'axios';
const destino = "http://localhost";
const port = "1337";
export default {

  async create(inspeccion) {
    let response = await axios.post(`${destino}:${port}/v1/inspeccion/create`, inspeccion)

    return response;
  },

  async getInspecciones() {
    let response = await axios.get(`${destino}:${port}/v1/inspeccion/`)

    return response.data.body;
  },

  async delete(id) {
    let response = await axios.delete(`${destino}:${port}/v1/inspeccion/remove/`+id)

    return response;
  },

  async edit(id, body) {
    let response = await axios.put(`${destino}:${port}/v1/inspeccion/update/`+id, body)

    return response;
  },
}