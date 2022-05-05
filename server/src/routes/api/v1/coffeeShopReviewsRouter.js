import express from "express"
import { Review } from "../../../models/index.js"
import cleanUserInput from "../../../services/cleanUserInput.js"

const coffeeShopReviewsRouter = new express.Router()

coffeeShopReviewsRouter.post("/", async (req, res) => {
  const { id } = req.params

  try {
    const reviewBody = req.body 
    const cleanBodyData = cleanUserInput(reviewBody)

    


  } catch (error) {

  }

})

export default coffeeShopReviewsRouter