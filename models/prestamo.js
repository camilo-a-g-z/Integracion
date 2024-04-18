/**
 * entregaATiempo: boolean;
  horEntrega: string;
  idDevolucion: string;
 */
import { db } from "../config/conf_firebase.js";
import { collection, getDocs } from "firebase/firestore";


export class PrestamoModel {
    static async create({ entregaATiempo, horEntrega, idDevolucion }) {
        const prestamo = await db.collection("prestamo").add({
            entregaATiempo,
            horEntrega,
            idDevolucion
        });

        return prestamo.id;
    }

    static async getAll() {
        const dataPrestamos = [];
        const prestamos = await getDocs(collection(db, "prestamo")).then(
            (querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    dataPrestamos.push(doc.data());
                });
            }
        );
        return dataPrestamos;
        
    }

    static async getById(idPrestamo) {
        const prestamos = await PrestamoModel.getAll();
        return prestamos.find((prestamo) => prestamo.idPrestamo === idPrestamo) ?? null;
    }
}