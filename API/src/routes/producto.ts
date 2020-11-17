import { Schema, model } from "mongoose";

//Declaramos esquema para la tabla Producto
const productoSchema = new Schema(
  {
    sku: { type: String, trim: true, unique: true },
    nombre: { type: String, required: true, trim: true },
    cantidad: { type: String, required: true, trim: true },
    precio: { type: String, required: true, trim: true },
    descripcion: { type: String, trim: true },
    imagen: { type: String, trim: true },
  },
  {
    //asignamos versionkey para rmeover _v y timestamps para tener mas informacion de los datos
    versionKey: false,
    timestamps: true,
  }
);

export default model("producto", productoSchema);
