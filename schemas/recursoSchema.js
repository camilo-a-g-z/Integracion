import { z } from "zod"

const recursoSchema = z.object({
  idRecurso: z.string(),
  nombre: z.string(),
  caracteristicas: z.object({
    descripcion: z.string(),
    capacidad: z.string(),
    ubicacion: z.string()
  }),
  idTRecurso: z.string()
})

export function validarRecurso(object) {
  return recursoSchema.safeParse(object)
}
