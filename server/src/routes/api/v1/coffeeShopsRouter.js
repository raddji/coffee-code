import express from "express";
import { CoffeeShop } from "../../../models/index.js";
import { ValidationError } from "objection";
import cleanUserInput from "../../../services/cleanUserInput.js";

const coffeeShopsRouter = new express.Router();

coffeeShopsRouter.get("/", async (req, res) => {
  try {
    const coffeeShops = await CoffeeShop.query();
    return res.status(200).json({ coffeeShops: coffeeShops });
  } catch (err) {
    return res.status(500).json({ errors: err });
  }
});

coffeeShopsRouter.post("/", async (req, res) => {
  try {
    const formData = cleanUserInput(req.body)   
    const newCoffeeShop = await CoffeeShop.query().insertAndFetch(formData)
    return res.status(201).json({ newCoffeeShop })
  } catch (err) {
    if (err instanceof ValidationError) {
      return res.status(422).json({ errors: err.data })
    }
    return res.status(500).json({ errors: err })
  }
})

export default coffeeShopsRouter;