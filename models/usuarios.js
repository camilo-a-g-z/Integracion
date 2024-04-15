import { db } from "../config/conf_firebase.js";

export class UserModel {
    static async create({ email, password }) {
        const user = await db.collection("users").add({
            email,
            password
        });

        return user.id;
    }

    static async getAll() {
        const users = await db.collection("Usuario").get();
        return users.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        }));
    }
}