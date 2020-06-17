import axios from 'axios';
const destino = "http://localhost";
const port = "1337";
export default {

  async create(empleado) {
    let response = await axios.post(`${destino}:${port}/v1/empleado/create`, empleado)

    return response;
  },

  async getEmpleados() {
    let response = await axios.get(`${destino}:${port}/v1/empleado/`)

    return response.data.body;
  },
  
  async LoginEmpleado(cedula, pass) {
    let response = await axios.get(`${destino}:${port}/v1/login/`+cedula+`/`+pass)

    return response;
  },

  async delete(id) {
    let response = await axios.delete(`${destino}:${port}/v1/empleado/remove/`+id)

    return response;
  },

  async edit(id, body) {
    let response = await axios.put(`${destino}:${port}/v1/empleado/update/`+id, body)

    return response;
  },
}