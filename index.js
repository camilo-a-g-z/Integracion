import express, { json } from "express";
//import { corsMiddleware } from "./middlewares/cors.js";
import { routes } from "./routes/routes.js";
export const createApp = ({model}) => {
  const app = express();

  app.use(json());
  //app.use(corsMiddleware);
  app.disable("x-powered-by");

  app.use("/", routes(model));

  const PORT = process.env.PORT || 3000;

  const server = app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
  });

  return { app, server };
};

