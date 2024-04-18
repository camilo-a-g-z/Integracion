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
    return router;
}