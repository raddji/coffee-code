import express from 'express'
import { Vote } from '../../../models/index.js'
import votesSummary from '../../../services/votesSummary.js'
import { ValidationError } from 'objection'

const reviewVotesRouter = new express.Router({ mergeParams: true })

reviewVotesRouter.get("/", async (req, res) => {
  const { reviewId } = req.params
  const userId = req.user.id

  try {
    const votes = await Vote.query().select().where("reviewId", "=", `${reviewId}`)
    const response = votesSummary(votes, userId)
    return res.status(200).json(response)
  } catch(errors) {
    console.error(errors)
    return res.status(500).json({ errors })
  }
})

reviewVotesRouter.post("/", async (req, res) => {
  const { reviewId } = req.params
  const userId = req.user.id
  
  try {
    await Vote.query().insert({ userId, reviewId, vote: req.body.voteValue })
    const votes = await Vote.query().select().where("reviewId", "=", `${reviewId}`)
    const response = votesSummary(votes, userId)
    return res.status(201).json(response)
  } catch(errors) {
    if (errors instanceof ValidationError) {
      return res.status(422).json({ errors: errors.data })
    }
    return res.status(500).json({ errors })
  }
})

reviewVotesRouter.patch("/", async (req, res) => {
  const { reviewId } = req.params
  const userId = req.user.id

  try {
    await Vote.query().patch({ vote: req.body.voteValue}).findOne({ reviewId, userId })
    const votes = await Vote.query().select().where("reviewId", "=", `${reviewId}`)
    const response = votesSummary(votes, userId)
    return res.status(201).json(response)
  } catch(errors) {
    if (errors instanceof ValidationError) {
      return res.status(422).json({ errors: errors.data })
    }
    return res.status(500).json({ errors })
  }
})

export default reviewVotesRouter