/**
 * caracteristicas: {
    personas: string,
  };
  descripcion: string;
  horEntSem: {
    fin: string,
    inicio: string
  };
  horFinSem: {
    fin: string,
    inicio: string
  };
  idTRecurso: string;
  nombre: string,
 */
import { db } from "../config/conf_firebase.js";
import { collection, getDocs } from "firebase/firestore";

export class TipoRecursoModel {
  static async create({
    caracteristicas,
    descripcion,
    horEntSem,
    horFinSem,
    idTRecurso,
    nombre,
  }) {
    const tipoRecurso = await db.collection("TipoRecurso").add({
      caracteristicas,
      descripcion,
      horEntSem,
      horFinSem,
      idTRecurso,
      nombre,
    });

    return tipoRecurso.id;
  }

  static async getAll() {
    const dataTipoRecursos = [];
    const tipoRecursos = await getDocs(collection(db, "TipoRecurso")).then(
      (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          dataTipoRecursos.push(doc.data());
        });
      }
    );
    return dataTipoRecursos;
  }

  static async getByNombre(nombre) {
    const tipoRecursos = await TipoRecursoModel.getAll();
    return (
      tipoRecursos.find((tipoRecurso) => tipoRecurso.nombre === nombre) ?? null
    );
  }

  static async getById(idTRecurso) {
    const tipoRecursos = await TipoRecursoModel.getAll();
    return (
      tipoRecursos.find(
        (tipoRecurso) => tipoRecurso.idTRecurso === idTRecurso
      ) ?? null
    );
  }
}
