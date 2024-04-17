import { db } from "../config/conf_firebase.js";
import { collection, getDocs } from "firebase/firestore";

export class UserModel {
    static async create({ email, password }) {
        const user = await db.collection("users").add({
            email,
            password
        });

        return user.id;
    }

    static async getAll() {
        const dataUsers = [];
        const users = await getDocs(collection(db, "Usuario")).then(
            (querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    dataUsers.push(doc.data());
                });
            }
        );
        return dataUsers;
        
    }

    static async getByEmail(email) {
        const users = await UserModel.getAll();
        return users.find((user) => user.correo === email) ?? null;
    }
}