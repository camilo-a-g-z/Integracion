/**
 * dia: Date;
  horario: {
    fin: string,
    inicio: string
  };
  idReserva: string;
 */
import { db } from "../config/conf_firebase.js";
import { collection, getDocs, getDoc } from "firebase/firestore";

export class ReservaModel {
    static async create({ dia, horario, idReserva }) {
        const reserva = await db.collection("Reserva").add({
            dia,
            horario,
            idReserva
        });

        return reserva.id;
    }

    static async getAll() {
        const dataReservas = [];
        const reservas = await getDocs(collection(db, "Reserva")).then(
            (querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    dataReservas.push(doc.data());
                });
            }
        );
        return dataReservas;
        
    }

    static async getById(idReserva) {
        const reservas = await getDoc(doc(db, "Reserva", idReserva));
        return reservas.data();
    }
}
