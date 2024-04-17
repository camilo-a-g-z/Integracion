import { db } from "../config/conf_firebase.js";
import { collection, getDocs } from "firebase/firestore";
/**
 *  caracteristicas{
        personas : string
    }
    idRecurso : string
    nombre: string
    prestado: true
 */

export class RecursoModel {
    static async create({ caracteristicas, idRecurso, nombre, prestado }) {
        const recurso = await db.collection("recurso").add({
            caracteristicas,
            idRecurso,
            nombre,
            prestado
        });

        return recurso.id;
    }

    static async getAll() {
        const dataRecursos = [];
        const recursos = await getDocs(collection(db, "recurso")).then(
            (querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    dataRecursos.push(doc.data());
                });
            }
        );
        return dataRecursos;
        
    }

    static async getByNombre(nombre) {
        const recursos = await RecursoModel.getAll();
        return recursos.find((recurso) => recurso.nombre === nombre) ?? null;
    }

    static async getById(idRecurso) {
        const recursos = await RecursoModel.getAll();
        return recursos.find((recurso) => recurso.idRecurso === idRecurso) ?? null;
    }
}
    
