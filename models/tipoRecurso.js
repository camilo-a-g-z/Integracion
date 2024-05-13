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
import { collection, getDocs, doc, setDoc, getDoc } from "firebase/firestore";

export class TipoRecursoModel {
  static async create({
    idTRecurso,
    nombre,
    descripcion,
    horEntSem,
    horFinSem,
    idUnidad
  }) {
    const tipoRecurso = await setDoc(doc(db, "TipoRecurso", idTRecurso), {
      idTRecurso,
      nombre,
      descripcion,
      horEntSem,
      horFinSem,
      idUnidad
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

  static async getById(idColeccion) {
    const tipoRecursos = await getDoc(doc(db, "TipoRecurso", idColeccion));
    console.log(tipoRecursos.data());
    return tipoRecursos.data();
  }
}
