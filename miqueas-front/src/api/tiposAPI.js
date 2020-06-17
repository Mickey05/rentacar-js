import axios from 'axios';
const destino = "http://localhost";
const port = "1337";
export default {

  async create(tipo) {
    let response = await axios.post(`${destino}:${port}/v1/tipo/create`, tipo)

    return response;
  },

  async getTipos() {
    let response = await axios.get(`${destino}:${port}/v1/tipo/`)

    return response.data.body;
  },

  async delete(id) {
    let response = await axios.delete(`${destino}:${port}/v1/tipo/remove/`+id)

    return response;
  },

  async edit(id, body) {
    let response = await axios.put(`${destino}:${port}/v1/tipo/update/`+id, body)

    return response;
  },
}