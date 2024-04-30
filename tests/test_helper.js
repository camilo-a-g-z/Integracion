export const datos = {
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
        id: "1",
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