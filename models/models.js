import { PrestamoModel } from "./prestamo.js";
import { RecursoModel } from "./recurso.js";
import { ReservaModel } from "./reserva.js";
import { TipoRecursoModel } from "./tipoRecurso.js";
import { UnidadModel } from "./unidad.js";
import { UserModel } from "./usuarios.js";
export class Models {
  getPrestamoModel() {
    return PrestamoModel;
  }
  getRecursoModel() {
    return RecursoModel;
  }
  getReservaModel() {
    return ReservaModel;
  }
  getTipoRecursoModel() {
    return TipoRecursoModel;
  }
  getUnidadModel() {
    return UnidadModel;
  }
  getUsuarioModel() {
    return UserModel;
  }
}
