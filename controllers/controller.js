/**
 * Formato integracion 
 * 
{< 
Body params  
 “usuario”: [ 
Correo:”” 
Id:”” 
] 
  "plataforma": "CompañeroPlataforma", 
  "tipo": "intercambio", 
  "datos": { 
    "operacion": "sincronizar", 
    "entidad": "espacios" | "reservas", 
    "data": [ 
      { 
        "id": 1, 
        "nombre": "Aula 101", 
        "descripcion": "Aula con capacidad para 30 personas", 
        "capacidad": 30, 
        "tipo": "aula", 
        "ubicacion": "Edificio A, Piso 2", 
        "horario_disponibilidad": [ 
          { 
            "dia": "lunes", 
            "hora_inicio": "08:00", 
            "hora_fin": "22:00" 
          }, 
          { 
            "dia": "martes", 
            "hora_inicio": "08:00", 
            "hora_fin": "22:00" 
          }, 
          { 
            "dia": "miercoles", 
            "hora_inicio": "08:00", 
            "hora_fin": "22:00" 
          }, 
          { 
            "dia": "jueves", 
            "hora_inicio": "08:00", 
            "hora_fin": "22:00" 
          }, 
          { 
            "dia": "viernes", 
            "hora_inicio": "08:00", 
            "hora_fin": "22:00" 
          } 
        ] 
      }, 
      ... 
    ] 
  } 
} 
 */

import { Models } from "../models/models.js";

export class Controller {
  constructor() {
    this.models = new Models();
  }

  async createRecurso({ idRecurso, nombre, caracteristicas, idTRecurso }) {
    return await this.models
      .getRecursoModel()
      .create({ idRecurso, nombre, caracteristicas, idTRecurso });
  }

  async createReserva({ dia, horario, idReserva }) {
    return await this.models
      .getReservaModel()
      .create({ dia, horario, idReserva });
  }

  async createPrestamo({ entregaATiempo, horEntrega, idDevolucion }) {
    return await this.models
      .getPrestamoModel()
      .create({ entregaATiempo, horEntrega, idDevolucion });
  }

  async getAllRecursos() {
    return await this.models.getRecursoModel().getAll();
  }

  async getAllReservas() {
    return await this.models.getReservaModel().getAll();
  }

  async getAllPrestamos() {
    return await this.models.getPrestamoModel().getAll();
  }

  async getRecursoById(idRecurso) {
    return await this.models.getRecursoModel().getById(idRecurso);
  }

  async getReservaById(idReserva) {
    return await this.models.getReservaModel().getById(idReserva);
  }

  async getPrestamoById(idPrestamo) {
    return await this.models.getPrestamoModel().getById(idPrestamo);
  }

  async getRecursoByNombre(nombre) {
    return await this.models.getRecursoModel().getByNombre(nombre);
  }

  async getUnidadByNombre(nombre) {
    return await this.models.getUnidadModel().getByNombre(nombre);
  }

  async getUnidadById(idUnidad) {
    return await this.models.getUnidadModel().getById(idUnidad);
  }

  async createUnidad({ horEntSem, horFinSem, idUnidad, nombre, tMinPrestamo }) {
    return await this.models
      .getUnidadModel()
      .create({ horEntSem, horFinSem, idUnidad, nombre, tMinPrestamo });
  }

  async getAllUnidades() {
    return await this.models.getUnidadModel().getAll();
  }

  async getUsuarioByEmail(email) {
    return await this.models.getUsuarioModel().getByEmail(email);
  }

  async getAllUsers() {
    return await this.models.getUsuarioModel().getAll();
  }
  async getAllTipoRecursos() {
    return await this.models.getTipoRecursoModel().getAll();
  }

  async createTipoRecurso({ idTRecurso, nombre, descripcion, horEntSem, horFinSem, idUnidad }) {
    return await this.models
    .getTipoRecursoModel()
    .create({ idTRecurso, nombre, descripcion, horEntSem, horFinSem, idUnidad });
  }

  async createRecursoIntegracion({ idRecurso, nombre, caracteristicas, idTRecurso }) {
    return await this.models
      .getRecursoModel()
      .create({ idRecurso, nombre, caracteristicas, idTRecurso });
  }
}
