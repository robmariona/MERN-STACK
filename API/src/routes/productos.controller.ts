import { RequestHandler } from "express";
import producto from "./producto";

export const addProductos: RequestHandler = async (req, res) => {
  const foundProd = await producto.findOne({ sku: req.body.sku });
  if (foundProd)
    return res.status(301).json({ message: "El Producto ya existe" });

  const prod = new producto(req.body);
  console.log(prod);
  const savedprod = await prod.save();
  res.json(savedprod);
};

export const getProductos: RequestHandler = async (req, res) => {
  try {
    const prod = await producto.find();
    return res.json(prod);
  } catch (error) {
    res.json(error);
  }
};

export const getProducto: RequestHandler = async (req, res) => {
  try {
    const findProd = await producto.findById(req.params.id);
    if (!findProd) return res.status(204).json();
    return res.json(findProd);
    return res.json(req.params.id);
  } catch (error) {
    console.log(error);
  }
};

export const deleteProductos: RequestHandler = async (req, res) => {
  try {
    const delProd = await producto.findByIdAndDelete(req.params.id);
    if (!delProd) return res.status(204).json();
    return res.json(delProd);
    return res.json(req.params.id);
  } catch (error) {
    console.log(error);
  }
};

export const updateProductos: RequestHandler = async (req, res) => {
  try {
    const updProd = await producto.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updProd) return res.status(204).json();
    res.json(updProd);
    return res.json(req.params.id);
  } catch (error) {
    console.log(error);
  }
};
