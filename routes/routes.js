import { Router } from "express";
import { Controller } from "../controllers/controller.js";

export const routes = ({ model } = {}) => {
    const router = Router();
    const controller = new Controller({model});
    router.get("/recursos", async (req, res) => {
        const recursos = await controller.getAllRecursos();
        res.json(recursos);
    });
    router.get("/users", async (req, res) => {
        const users = await controller.getAllUsers();
        res.json(users);
    });
    router.get("/reservas", async (req, res) => {
        const reservas = await controller.getAllReservas();
        res.json(reservas);
    });
    router.get("/prestamos", async (req, res) => {
        const prestamos = await controller.getAllPrestamos();
        res.json(prestamos);
    });
    router.get("/tipoRecursos", async (req, res) => {
        const tipoRecursos = await controller.getAllTipoRecursos();
        res.json(tipoRecursos);
    });
    router.get("/unidades", async (req, res) => {
        const unidades = await controller.getAllUnidades();
        res.json(unidades);
    });
    return router;
}