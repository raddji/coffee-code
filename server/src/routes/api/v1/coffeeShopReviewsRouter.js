import express from "express";
import { Review } from "../../../models/index.js";
import cleanUserInput from "../../../services/cleanUserInput.js";
import { ValidationError } from "objection";

const coffeeShopReviewsRouter = new express.Router({ mergeParams: true });

coffeeShopReviewsRouter.post("/", async (req, res) => {
  const { coffeeShopId } = req.params;
  try {
    const reviewBody = req.body;
    const cleanBodyData = cleanUserInput(reviewBody);

    const review = await Review.query().insertAndFetch({
      ...cleanBodyData,
      coffeeShopId: coffeeShopId,
      userId: req.user.id,
    });
    return res.status(201).json({ review });
  } catch (error) {
    if (error instanceof ValidationError) {
      return res.status(422).json({ errors: error.data });
    }
    return res.status(500).json({ errors: error });
  }
});

export default coffeeShopReviewsRouter;
