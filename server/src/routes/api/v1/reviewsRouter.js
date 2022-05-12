import express from 'express';
import { Review } from '../../../models/index.js'
import reviewVotesRouter from './reviewVotesRouter.js'

const reviewsRouter = new express.Router()

reviewsRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const review = await Review.query().findOne({ id: id })
    await review.$relatedQuery("votes").delete()

    await Review.query().deleteById(id)
    return res.status(200).json({message: "Successfully Deleted"})
  } catch (error) {
    console.log(error)
    return res.status(500).json({ errors: error });
  }
})

reviewsRouter.use("/:id/votes", reviewVotesRouter)

export default reviewsRouter