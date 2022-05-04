import express from "express";
import { CoffeeShop } from "../../../models/index.js";

const coffeeShopsRouter = new express.Router();

coffeeShopsRouter.get("/", async (req, res) => {
  try {
    const coffeeShops = await CoffeeShop.query();
    return res.status(200).json({ coffeeShops: coffeeShops });
  } catch (err) {
    return res.status(500).json({ errors: err });
  }
});

coffeeShopsRouter.get("/:id", async (req, res) => {
  try {
    const coffeeShop = await CoffeeShop.query().findById(req.params.id)
    return res.status(200).json({ coffeeShop: coffeeShop })
  } catch(errors) {
    return res.status(500).json({ errors: errors })
  }
})

export default coffeeShopsRouter;
