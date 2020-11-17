import express from "express";
import config from "./config";
import productoRoutes from "./routes/productos.routes";
import userRoutes from "./routes/users.routes";
import morgan from "morgan";
import cors from "cors";

//Se corren los modulos
const app = express();

app.set("port", config.PORT);

app.use(morgan("dev"));

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(userRoutes);

app.use(productoRoutes);

export default app;
