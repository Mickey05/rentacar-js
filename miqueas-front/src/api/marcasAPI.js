import axios from 'axios';
const destino = "http://localhost";
const port = "1337";
export default {

  async create(marca) {
    let response = await axios.post(`${destino}:${port}/v1/marca/create`, marca)

    return response;
  },

  async getMarcas() {
    let response = await axios.get(`${destino}:${port}/v1/marca/`)

    return response.data.body;
  },

  async delete(id) {
    let response = await axios.delete(`${destino}:${port}/v1/marca/remove/`+id)

    return response;
  },

  async edit(id, body) {
    let response = await axios.put(`${destino}:${port}/v1/marca/update/`+id, body)

    return response;
  },
}