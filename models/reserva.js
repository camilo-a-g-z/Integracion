/**
 * dia: Date;
  horario: {
    fin: string,
    inicio: string
  };
  idReserva: string;
 */
import { db } from "../config/conf_firebase.js";
import { collection, getDocs } from "firebase/firestore";

export class ReservaModel {
    static async create({ dia, horario, idReserva }) {
        const reserva = await db.collection("reserva").add({
            dia,
            horario,
            idReserva
        });

        return reserva.id;
    }

    static async getAll() {
        const dataReservas = [];
        const reservas = await getDocs(collection(db, "reserva")).then(
            (querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    dataReservas.push(doc.data());
                });
            }
        );
        return dataReservas;
        
    }

    static async getById(idReserva) {
        const reservas = await ReservaModel.getAll();
        return reservas.find((reserva) => reserva.idReserva === idReserva) ?? null;
    }
}
