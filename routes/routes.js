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

import { Router } from "express";
import { Controller } from "../controllers/controller.js";
import { validarRecurso } from "../schemas/recursoSchema.js";

export const routes = ({ model } = {}) => {
  const router = Router();
  const controller = new Controller({ model });
  router.get("/integracion", async (req, res) => {
    const integracion = await controller.integracionConsulta();
    res.json(integracion);
  });
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
  router.post("/postIntegracion", async (req, res) => {
    console.log(req.body); 
    const idRecurso = req.body.datos.data[0].id;
    const nombre = req.body.datos.data[0].nombre;
    const caracteristicas = {
      descripcion: req.body.datos.data[0].descripcion,
      capacidad: req.body.datos.data[0].capacidad,
      ubicacion: req.body.datos.data[0].ubicacion,
    };
    const idTRecurso = req.body.datos.data[0].idTRecurso;

    const result = validarRecurso({
      idRecurso,
      nombre,
      caracteristicas,
      idTRecurso,
    });
    if (result.error) {
      return res
        .status(400)
        .json({ message: JSON.parse(result.error.message) });
    }

    const recurso = await controller.createRecursoIntegracion({
      idRecurso,
      nombre,
      caracteristicas,
      idTRecurso,
    });
    res.status(200).json({ Registro: "Ok" });
  });
  router.get("/integracion/:idRecurso", async (req, res) => {
    const recurso = await controller.integracionConsultaID(
      req.params.idRecurso
    );
    res.json(recurso);
  });
  return router;
};
