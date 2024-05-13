/**
 * entregaATiempo: boolean;
  horEntrega: string;
  idDevolucion: string;
 */
import { db } from "../config/conf_firebase.js";
import { collection, getDocs, getDoc } from "firebase/firestore";


export class PrestamoModel {
    static async create({ entregaATiempo, horEntrega, idDevolucion }) {
        const prestamo = await db.collection("Prestamo").add({
            entregaATiempo,
            horEntrega,
            idDevolucion
        });

        return prestamo.id;
    }

    static async getAll() {
        const dataPrestamos = [];
        const prestamos = await getDocs(collection(db, "Prestamo")).then(
            (querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    dataPrestamos.push(doc.data());
                });
            }
        );
        return dataPrestamos;
        
    }

    static async getById(idPrestamo) {
        const prestamos = await getDoc(doc(db, "Prestamo", idPrestamo));
        return prestamos.data();
    }
}