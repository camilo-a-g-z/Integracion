import { createApp } from "../index.js";
import { Models } from "../models/models.js";
//const app = createApp({model: Models}).app
const supertest = require('supertest')
//const api = supertest(app)
const datosPrueba = require('./test_helper').datos
const recursoIntegracion = require('./test_helper.js').recursoIntegracion
const datosIntegracionCliente = require('./test_helper.js').datosIntegracionCliente


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

  test('Se consulta el recurso agregado mediante el ID', async () => {

    const respuesta = await api.get('/integracion/99');
    expect(respuesta.status).toBe(200);
    expect(respuesta.type).toMatch(/json/);
    expect(respuesta.body).toEqual(recursoIntegracion);
  }, 10000)

})


describe('Obtener recursos del cliente en la integracion', () => {
  test('Se consultan los recursos del cliente de la integracion', async () => {
    const respuesta = await api.get('/ClienteIntegracion');
    expect(respuesta.status).toBe(200);
    expect(respuesta.type).toMatch(/json/);
    expect(respuesta.body).toEqual(datosIntegracionCliente);
  }, 10000)

})

afterAll(() => {
  // Cerrar el servidor después de todas las pruebas
  server.close();
});