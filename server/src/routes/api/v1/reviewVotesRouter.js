import express from 'express'
import { Vote } from '../../../models/index.js'
import { ValidationError } from 'objection'

const reviewVotesRouter = new express.Router({ mergeParams: true })

reviewVotesRouter.post("/", async (req, res) => {
  const { reviewId } = req.params
  const userId = req.user.id
  
  try {
    if (req.body.userVoteRecordExists) {
      await Vote.query().patch({ value: req.body.voteValue}).findOne({ reviewId, userId })
    } else {
      await Vote.query().insert({ userId, reviewId, value: req.body.voteValue })
    }
    return res.status(201).json({ message: "successful vote"})
  } catch(errors) {
    if (errors instanceof ValidationError) {
      return res.status(422).json({ errors: errors.data })
    }
    return res.status(500).json({ errors })
  }
})

export default reviewVotesRouter