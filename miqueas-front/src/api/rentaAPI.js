import axios from 'axios';
const destino = "http://localhost";
const port = "1337";
export default {

  async create(rentadevolucion) {
    let response = await axios.post(`${destino}:${port}/v1/rentadevolucion/create`, rentadevolucion)

    return response;
  },

  async getRentas() {
    let response = await axios.get(`${destino}:${port}/v1/rentadevolucion/`)

    return response.data.body;
  },
  async getRentaByClientes(id, estado) {
    let response = await axios.get(`${destino}:${port}/v1/devolucion/`+id+`/`+estado)

    return response.data.body;
  },

  async delete(id) {
    let response = await axios.delete(`${destino}:${port}/v1/rentadevolucion/remove/`+id)

    return response;
  },

  async edit(id, body) {
    let response = await axios.put(`${destino}:${port}/v1/rentadevolucion/update/`+id, body)

    return response;
  },
}