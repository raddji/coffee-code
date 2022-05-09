import express from "express";
import { CoffeeShop } from "../../../models/index.js";
import { ValidationError } from "objection";
import cleanUserInput from "../../../services/cleanUserInput.js";
import coffeeShopReviewsRouter from "./coffeeShopReviewsRouter.js";
import CoffeeShopSerializer from "../../../serializers/CoffeeShopSerializer.js";

const coffeeShopsRouter = new express.Router();

coffeeShopsRouter.get("/", async (req, res) => {
  try {
    const coffeeShops = await CoffeeShop.query();
    const serializedCoffeeShops = coffeeShops.map(coffeeShop => CoffeeShopSerializer.getSummary(coffeeShop))
    return res.status(200).json({ coffeeShops: serializedCoffeeShops });
  } catch (err) {
    return res.status(500).json({ errors: err });
  }
});

coffeeShopsRouter.get("/:id", async (req, res) => {
  try {
    const coffeeShop = await CoffeeShop.query().findById(req.params.id)
    const serializedCoffeeShop = await CoffeeShopSerializer.getDetails(coffeeShop)
    return res.status(200).json({ coffeeShop: serializedCoffeeShop })
  } catch (errors) {
    console.log(errors)
    return res.status(500).json({ errors: errors })
  }
})

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

coffeeShopsRouter.use("/:coffeeShopId/reviews", coffeeShopReviewsRouter)

export default coffeeShopsRouter;
