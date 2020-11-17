import { Schema, model } from "mongoose";

//Declaramos esquema para la tabla User
const userSchema = new Schema(
  {
    nombre: { type: String, trim: true, required: true },
    telefono: { type: String, required: true, trim: true },
    username: { type: String, required: true, trim: true, unique: true },
    nacimiento: { type: String, required: true, trim: true },
    email: { type: String, trim: true, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    //asignamos versionkey para rmeover _v y timestamps para tener mas informacion de los datos
    versionKey: false,
    timestamps: true,
  }
);

export default model("user", userSchema);
