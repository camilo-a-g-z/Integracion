const datos = {
  usuario: {
    Correo: "",
    Id: ""
  },
  plataforma: "CompañeroPlataforma",
  tipo: "intercambio",
  datos: {
    operacion: "sincronizar",
    entidad: "espacios",
    data: [
      {
        id: "99",
        nombre: "Aula 101",
        descripcion: "Aula con capacidad para 30 personas",
        capacidad: "30",
        tipo: "aula",
        ubicacion: "Edificio A, Piso 2",
        idTRecurso: "1",
        horario_disponibilidad: [
          {
            dia: "lunes",
            hora_inicio: "08:00",
            hora_fin: "22:00"
          },
          {
            dia: "martes",
            hora_inicio: "08:00",
            hora_fin: "22:00"
          },
          {
            dia: "miercoles",
            hora_inicio: "08:00",
            hora_fin: "22:00"
          },
          {
            dia: "jueves",
            hora_inicio: "08:00",
            "hora_fin": "22:00"
          },
          {
            dia: "viernes",
            hora_inicio: "08:00",
            hora_fin: "22:00"
          }
        ]
      }
    ]
  }
}

const recursoIntegracion = {
  "nombre": "Aula 101",
  "idRecurso": "99",
  "descripcion": "Espacios fisicos para los estudiantes",
  "nombreTipo": "Aulas",
  "horEntSem": [
    {
      "hora_inicio": "08:00",
      "hora_fin": "22:00",
      "dia": "lunes"
    },
    {
      "dia": "martes",
      "hora_fin": "22:00",
      "hora_inicio": "08:00"
    },
    {
      "dia": "miercoles",
      "hora_fin": "22:00",
      "hora_inicio": "08:00"
    },
    {
      "hora_fin": "22:00",
      "dia": "jueves",
      "hora_inicio": "08:00"
    },
    {
      "dia": "viernes",
      "hora_fin": "22:00",
      "hora_inicio": "08:00"
    }
  ],
  "horFinSem": []
}

const datosIntegracionCliente = [
  {
    "plataforma": "CompañeroPlataforma",
    "tipo": "intercambio",
    "datos": {
      "operacion": "sincronizar",
      "entidad": "espacios",
      "data": [
        {
          "id": 1,
          "nombre": "Sala computo piso 11",
          "descripcion": "",
          "tipo": "aula",
          "ubicacion": "Unidad A",
          "horario_disponibilidad": [
            {
              "dia": "Lunes",
              "hora_inicio": "08:00",
              "hora_fin": "18:00"
            },
            {
              "dia": "Martes",
              "hora_inicio": "10:30",
              "hora_fin": "12:00"
            },
            {
              "dia": "Miércoles",
              "hora_inicio": "10:30",
              "hora_fin": "12:00"
            },
            {
              "dia": "Jueves",
              "hora_inicio": "10:30",
              "hora_fin": "12:00"
            },
            {
              "dia": "Viernes",
              "hora_inicio": "10:30",
              "hora_fin": "12:00"
            }
          ]
        }
      ]
    }
  },
  {
    "plataforma": "CompañeroPlataforma",
    "tipo": "intercambio",
    "datos": {
      "operacion": "sincronizar",
      "entidad": "espacios",
      "data": [
        {
          "id": 2,
          "nombre": "Sala de conferencias",
          "descripcion": "Espacio amplio para reuniones y presentaciones.",
          "tipo": "aula",
          "ubicacion": "Unidad A",
          "horario_disponibilidad": [
            {
              "dia": "Martes",
              "hora_inicio": "09:00",
              "hora_fin": "17:00"
            },
            {
              "dia": "Jueves",
              "hora_inicio": "10:30",
              "hora_fin": "12:00"
            },
            {
              "dia": "Viernes",
              "hora_inicio": "13:00",
              "hora_fin": "18:00"
            }
          ]
        }
      ]
    }
  }
]

module.exports = {
  datos,
  recursoIntegracion,
  datosIntegracionCliente
}