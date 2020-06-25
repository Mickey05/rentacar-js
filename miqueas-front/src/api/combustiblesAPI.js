import axios from 'axios';
const destino = "http://localhost";
const port = "1337";
export default {

  async create(combustible) {
    let response = await axios.post(`${destino}:${port}/v1/combustible/create`, combustible)

    return response;
  },

  async getCombustibles() {
    let response = await axios.get(`${destino}:${port}/v1/combustible/`)

    return response.data.body;
  },

  async delete(id) {
    let response = await axios.delete(`${destino}:${port}/v1/combustible/remove/`+id)

    return response;
  },

  async edit(id, body) {
    let response = await axios.put(`${destino}:${port}/v1/combustible/update/`+id, body)

    return response;
  },
}