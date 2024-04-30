import { createApp } from "../index.js";
import { Models } from "../models/models.js";
//const app = createApp({model: Models}).app
const supertest = require('supertest')
//const api = supertest(app)
const datosPrueba = require('./test_helper').datos

let app, server, api;

beforeAll(() => {
  // Inicializar la aplicación y el servidor antes de las pruebas
  const { app: expressApp, server: expressServer } = createApp({model: Models});
  app = expressApp;
  server = expressServer;
  api = supertest(app);
});

describe('Añadir un recurso en la integracion', () => {
  test('Se agrega correctamente el recurso', async () => {

    await api
      .post('/postIntegracion')
      .send(datosPrueba)
      .expect(200)
      .expect('Content-Type', /application\/json/)
  }, 10000)

  test('Se consulta el recurso agregado anteriormente', async () => {

    await api
      .get('/integracion')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  }, 10000)

})


afterAll(() => {
  // Cerrar el servidor después de todas las pruebas
  server.close();
});