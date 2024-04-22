import { Models } from "../models/models.js";

export class Controller {
    constructor() {
        this.models = new Models();
    }

    async createRecurso({ caracteristicas, idRecurso, nombre, prestado }) {
        return await this.models.getRecursoModel().create({ caracteristicas, idRecurso, nombre, prestado });
    }

    async createReserva({ dia, horario, idReserva }) {
        return await this.models.getReservaModel().create({ dia, horario, idReserva });
    }

    async createPrestamo({ entregaATiempo, horEntrega, idDevolucion }) {
        return await this.models.getPrestamoModel().create({ entregaATiempo, horEntrega, idDevolucion });
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
        return await this.models.getUnidadModel().create({ horEntSem, horFinSem, idUnidad, nombre, tMinPrestamo });
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
}