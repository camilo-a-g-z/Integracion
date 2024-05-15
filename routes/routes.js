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
import { request } from "express";
import  Axios  from "axios";

export const routes = ({ model } = {}) => {
  const router = Router();
  const controller = new Controller({ model });
  router.get("/", (req, res) => {
    res.send("Integración grupo los 5 - 420");
  });
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

  router.get("/ClienteIntegracion", async (req, res) => {
    //181.143.186.147:8081/recursos/listar
    //Token: Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsb3NjaW5jb0Bsb3NjaW5jby5jb20iLCJleHAiOjE3MTgyMjI1ODYsIm5vbWJyZSI6IkxvcyBDaW5jbyJ9.3x7shRc7NbdrXHgf_lTO9Ryh5w9PwtVLeLc2ZfjrPGpwnamkSTEvL-ObwWpc7Q4xeS1CkgEO48a8hxAW7861fw
    let url = "http://181.143.186.147:8081/recursos/listar";
    let token = "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsb3NjaW5jb0Bsb3NjaW5jby5jb20iLCJleHAiOjE3MTgyMjI1ODYsIm5vbWJyZSI6IkxvcyBDaW5jbyJ9.3x7shRc7NbdrXHgf_lTO9Ryh5w9PwtVLeLc2ZfjrPGpwnamkSTEvL-ObwWpc7Q4xeS1CkgEO48a8hxAW7861fw"
    const response = await Axios.get(url, {
      headers: {
        Authorization: token,
      },
    });
    //Se obtiene el siguiente JSON
    /**
     * [
  {
    "id": 1,
    "nombre": "Sala computo piso 11",
    "descripcion": "",
    "imageUrl": "",
    "unidad": {
      "id": 1,
      "nombre": "Unidad A",
      "tipo": "Tipo 1",
      "tiempoMinimo": 60,
      "tiempoMaximo": 120,
      "horaInicio": "06:00:00",
      "horaFinal": "18:00:00",
      "diasDisponibles": [
        {
          "id": 1,
          "nombre": "Lunes"
        },
        {
          "id": 2,
          "nombre": "Martes"
        },
        {
          "id": 3,
          "nombre": "Miércoles"
        },
        {
          "id": 4,
          "nombre": "Jueves"
        },
        {
          "id": 5,
          "nombre": "Viernes"
        },
        {
          "id": 6,
          "nombre": "Sábado"
        }
      ]
    },
    "horarioDisponible": [
      {
        "id": 1,
        "dia": {
          "id": 1,
          "nombre": "Lunes"
        },
        "horaInicio": "08:00",
        "horaFin": "18:00"
      },
      {
        "id": 2,
        "dia": {
          "id": 2,
          "nombre": "Martes"
        },
        "horaInicio": "10:30",
        "horaFin": "12:00"
      },
      {
        "id": 3,
        "dia": {
          "id": 3,
          "nombre": "Miércoles"
        },
        "horaInicio": "10:30",
        "horaFin": "12:00"
      },
      {
        "id": 4,
        "dia": {
          "id": 4,
          "nombre": "Jueves"
        },
        "horaInicio": "10:30",
        "horaFin": "12:00"
      },
      {
        "id": 5,
        "dia": {
          "id": 5,
          "nombre": "Viernes"
        },
        "horaInicio": "10:30",
        "horaFin": "12:00"
      }
    ]
  },
  {
    "id": 2,
    "nombre": "Sala de conferencias",
    "descripcion": "Espacio amplio para reuniones y presentaciones.",
    "imageUrl": "https://example.com/sala-conferencias.jpg",
    "unidad": {
      "id": 1,
      "nombre": "Unidad A",
      "tipo": "Tipo 1",
      "tiempoMinimo": 60,
      "tiempoMaximo": 120,
      "horaInicio": "06:00:00",
      "horaFinal": "18:00:00",
      "diasDisponibles": [
        {
          "id": 1,
          "nombre": "Lunes"
        },
        {
          "id": 2,
          "nombre": "Martes"
        },
        {
          "id": 3,
          "nombre": "Miércoles"
        },
        {
          "id": 4,
          "nombre": "Jueves"
        },
        {
          "id": 5,
          "nombre": "Viernes"
        },
        {
          "id": 6,
          "nombre": "Sábado"
        }
      ]
    },
    "horarioDisponible": [
      {
        "id": 6,
        "dia": {
          "id": 2,
          "nombre": "Martes"
        },
        "horaInicio": "09:00",
        "horaFin": "17:00"
      },
      {
        "id": 7,
        "dia": {
          "id": 4,
          "nombre": "Jueves"
        },
        "horaInicio": "10:30",
        "horaFin": "12:00"
      },
      {
        "id": 8,
        "dia": {
          "id": 5,
          "nombre": "Viernes"
        },
        "horaInicio": "13:00",
        "horaFin": "18:00"
      }
    ]
  }
]
     */
    //transformar el JSON al formato de la integracion
    let integracion = [];
    response.data.forEach((element) => {
      let recurso = {
        plataforma: "CompañeroPlataforma",
        tipo: "intercambio",
        datos: {
          operacion: "sincronizar",
          entidad: "espacios",
          data: [
            {
              id: element.id,
              nombre: element.nombre,
              descripcion: element.descripcion,
              capacidad: element.capacidad,
              tipo: "aula",
              ubicacion: element.unidad.nombre,
              horario_disponibilidad: element.horarioDisponible.map((dia) => {
                return {
                  dia: dia.dia.nombre,
                  hora_inicio: dia.horaInicio,
                  hora_fin: dia.horaFin,
                };
              }),
            },
          ],
        },
      };
      integracion.push(recurso);
    });
    res.json(integracion);
  });

  return router;
};
