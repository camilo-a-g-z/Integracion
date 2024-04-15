import express, { json } from "express";
//import { corsMiddleware } from "./middlewares/cors.js";

export const createApp = () => {
    const app = express();

    app.use(json());
    //app.use(corsMiddleware);
    app.disable("x-powered-by");

    app.get("/", (req, res) => {
        res.send("Hello World");
    });

    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => {
        console.log(`Server started on http://localhost:${PORT}`);
    });

    return app;
}