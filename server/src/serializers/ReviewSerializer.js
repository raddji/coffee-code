import votesSummary from "../services/votesSummary.js";

class ReviewSerializer {
  static async getSummary(review, currentUserId) {
    const disallowedAttributes = ["createdAt", "updatedAt", "coffeeShopId", "userId"];
    const serialzedReview = {};

    Object.keys(review).forEach((attribute) => {
      if (!disallowedAttributes.includes(attribute)) {
        serialzedReview[attribute] = review[attribute];
      }
    })

    const votes = await review.$relatedQuery("votes")
    const voteData = votesSummary(votes, currentUserId)
    serialzedReview.voteData = voteData

    return serialzedReview;
  }
}

export default ReviewSerializer;