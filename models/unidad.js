/**
 * horEntSem: {
    fin: string,
    inicio: string
  };
  horFinSem: {
    fin: string,
    inicio: string
  };
  idUnidad: string;
  nombre: string,
  tMinPrestamo: string;
 */
import { db } from "../config/conf_firebase.js";
import { collection, getDocs } from "firebase/firestore";

export class UnidadModel {
  static async create({
    horEntSem,
    horFinSem,
    idUnidad,
    nombre,
    tMinPrestamo,
  }) {
    const unidad = await db.collection("Unidad").add({
      horEntSem,
      horFinSem,
      idUnidad,
      nombre,
      tMinPrestamo,
    });

    return unidad.id;
  }

  static async getAll() {
    const dataUnidades = [];
    const unidades = await getDocs(collection(db, "Unidad")).then(
      (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          dataUnidades.push(doc.data());
        });
      }
    );
    return dataUnidades;
  }

  static async getByNombre(nombre) {
    const unidades = await UnidadModel.getAll();
    return unidades.find((unidad) => unidad.nombre === nombre) ?? null;
  }

  static async getById(idUnidad) {
    const unidades = await UnidadModel.getAll();
    return unidades.find((unidad) => unidad.idUnidad === idUnidad) ?? null;
  }
}
