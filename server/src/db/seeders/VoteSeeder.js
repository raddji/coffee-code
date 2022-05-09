import { Vote } from "../../models/index.js"

class VoteSeeder {
  static async seed() {
    const votes = [
      {
        userId: 1,
        reviewId: 1,
        vote: 1
      },
      {
        userId: 1,
        reviewId: 2,
        vote: -1
      },
      {
        userId: 2,
        reviewId: 1,
        vote: -1
      },
      {
        userId: 2,
        reviewId: 2,
        vote: -1
      }
    ]

    for (const vote of votes) {
      const currentVote = await Vote.query().findOne(vote)

      if (!currentVote) {
        await Vote.query().insert(vote)
      }
    }
  }
}

export default VoteSeeder