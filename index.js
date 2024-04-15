import express, { json } from "express";
//import { corsMiddleware } from "./middlewares/cors.js";
//import { UserModel } from "./models/usuarios.js";
import { db } from "./config/conf_firebase.js";
import { collection, addDoc, getDocs } from "firebase/firestore"; 
export const createApp = () => {
    const app = express();

    app.use(json());
    //app.use(corsMiddleware);
    app.disable("x-powered-by");

    app.get("/", async (req, res) => {
        const user = await getDocs(collection(db, "Usuario"));
        res.json(user.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        })));
    });

    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => {
        console.log(`Server started on http://localhost:${PORT}`);
    });

    return app;
}