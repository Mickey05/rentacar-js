import axios from 'axios';
const destino = "http://localhost";
const port = "1337";
export default {

  async create(modelo) {
    let response = await axios.post(`${destino}:${port}/v1/modelo/create`, modelo)

    return response;
  },

  async getModelos() {
    let response = await axios.get(`${destino}:${port}/v1/modelo/`)

    return response.data.body;
  },

  async delete(id) {
    let response = await axios.delete(`${destino}:${port}/v1/modelo/remove/`+id)

    return response;
  },

  async edit(id, body) {
    let response = await axios.put(`${destino}:${port}/v1/modelo/update/`+id, body)

    return response;
  },
}