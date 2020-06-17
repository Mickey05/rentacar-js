import axios from 'axios';
const destino = "http://localhost";
const port = "1337";
export default {

  async create(cliente) {
    let response = await axios.post(`${destino}:${port}/v1/cliente/create`, cliente)

    return response;
  },

  async getClientes() {
    let response = await axios.get(`${destino}:${port}/v1/cliente/`)

    return response.data.body;
  },
  async getClienteByCedula(cedula) {
    let response = await axios.get(`${destino}:${port}/v1/cliente/`+cedula)

    return response.data.body;
  },

  async delete(id) {
    let response = await axios.delete(`${destino}:${port}/v1/cliente/remove/`+id)

    return response;
  },

  async edit(id, body) {
    let response = await axios.put(`${destino}:${port}/v1/cliente/update/`+id, body)

    return response;
  },
}