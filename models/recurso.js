import { db } from "../config/conf_firebase.js";
import { collection, getDocs, doc, setDoc } from "firebase/firestore";
/**
 *  caracteristicas{
        personas : string
    }
    idRecurso : string
    nombre: string
    prestado: true
 */

export class RecursoModel {
    static async create({ idRecurso, nombre, caracteristicas, idTRecurso }) {
        const recurso = await setDoc(doc(db, "Recurso", idRecurso), {
            idRecurso,
            nombre,
            caracteristicas,
            prestado:false,
            idTRecurso
        });

        return recurso;
    }

    static async getAll() {
        const dataRecursos = [];
        const recursos = await getDocs(collection(db, "Recurso")).then(
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
    
