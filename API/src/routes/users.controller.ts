import { RequestHandler } from "express";
import user from "./user";

export const addusers: RequestHandler = async (req, res) => {
  const foundProd = await user.findOne({ user: req.body.sku });
  if (foundProd)
    return res.status(301).json({ message: "El user ya existe" });

  const prod = new user(req.body);
  console.log(prod);
  const savedprod = await prod.save();
  res.json(savedprod);
};

export const getusers: RequestHandler = async (req, res) => {
  try {
    const prod = await user.find();
    return res.json(prod);
  } catch (error) {
    res.json(error);
  }
};

export const getuser: RequestHandler = async (req, res) => {
  try {
    const findProd = await user.findById(req.params.id);
    if (!findProd) return res.status(204).json();
    return res.json(findProd);
    return res.json(req.params.id);
  } catch (error) {
    console.log(error);
  }
};

export const deleteusers: RequestHandler = async (req, res) => {
  try {
    const delProd = await user.findByIdAndDelete(req.params.id);
    if (!delProd) return res.status(204).json();
    return res.json(delProd);
    return res.json(req.params.id);
  } catch (error) {
    console.log(error);
  }
};

export const updateusers: RequestHandler = async (req, res) => {
  try {
    const updProd = await user.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updProd) return res.status(204).json();
    res.json(updProd);
    return res.json(req.params.id);
  } catch (error) {
    console.log(error);
  }
};
