/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },


  
  //**Tipo de Vehiculo */
  'GET /v1/tipo/:id?': 'v-1/tipo-vehiculo/find',
  'POST /v1/tipo/create': 'v-1/tipo-vehiculo/create',
  'PUT /v1/tipo/update/:id': 'v-1/tipo-vehiculo/update',
  'DELETE /v1/tipo/remove/:id': 'v-1/tipo-vehiculo/remove',

  
  //**Marcas de Vehiculos */
  'GET /v1/marca/:id?': 'v-1/marca/find',
  'POST /v1/marca/create': 'v-1/marca/create',
  'PUT /v1/marca/update/:id': 'v-1/marca/update',
  'DELETE /v1/marca/remove/:id': 'v-1/marca/remove',

  
  //**Modelos de Vehiculos */
  'GET /v1/modelo/:id?': 'v-1/modelo/find',
  'POST /v1/modelo/create': 'v-1/modelo/create',
  'PUT /v1/modelo/update/:id': 'v-1/modelo/update',
  'DELETE /v1/modelo/remove/:id': 'v-1/modelo/remove',

  
  //**Tipo de Combustible */
  'GET /v1/combustible/:id?': 'v-1/combustible/find',
  'POST /v1/combustible/create': 'v-1/combustible/create',
  'PUT /v1/combustible/update/:id': 'v-1/combustible/update',
  'DELETE /v1/combustible/remove/:id': 'v-1/combustible/remove',

  
  //**Vehiculo */
  'GET /v1/vehiculo/:id?': 'v-1/vehiculos/find',
  'POST /v1/vehiculo/create': 'v-1/vehiculos/create',
  'PUT /v1/vehiculo/update/:id': 'v-1/vehiculos/update',
  'DELETE /v1/vehiculo/remove/:id': 'v-1/vehiculos/remove',
  

  //**Clientes */
  'GET /v1/cliente/:id?': 'v-1/clientes/find',
  'POST /v1/cliente/create': 'v-1/clientes/create',
  'PUT /v1/cliente/update/:id': 'v-1/clientes/update',
  'DELETE /v1/cliente/remove/:id': 'v-1/clientes/remove',

  
  //**Empleados */
  'GET /v1/empleado/:id?': 'v-1/empleados/find',
  'POST /v1/empleado/create': 'v-1/empleados/create',
  'PUT /v1/empleado/update/:id': 'v-1/empleados/update',
  'DELETE /v1/empleado/remove/:id': 'v-1/empleados/remove',
  

  //**Inspeccion */
  'GET /v1/inspeccion/:id?': 'v-1/inspeccion/find',
  'POST /v1/inspeccion/create': 'v-1/inspeccion/create',
  'PUT /v1/inspeccion/update/:id': 'v-1/inspeccion/update',
  'DELETE /v1/inspeccion/remove/:id': 'v-1/inspeccion/remove',


  //**Renta y Devolucion */
  'GET /v1/rentadevolucion/:id?': 'v-1/renta-devolucion/find',
  'POST /v1/rentadevolucion/create': 'v-1/renta-devolucion/create',
  'PUT /v1/rentadevolucion/update/:id': 'v-1/renta-devolucion/update',
  'DELETE /v1/rentadevolucion/remove/:id': 'v-1/renta-devolucion/remove',





  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
