import votesSummary from "../services/votesSummary.js";

class ReviewSerializer {
  static async getSummary(review, currentUserId) {
    const disallowedAttributes = ["createdAt", "updatedAt", "coffeeShopId", "userId"];
    const serializedReview = {};

    Object.keys(review).forEach((attribute) => {
      if (!disallowedAttributes.includes(attribute)) {
        serializedReview[attribute] = review[attribute];
      }
    })

    const votes = await review.$relatedQuery("votes")
    const voteData = votesSummary(votes, currentUserId)
    serializedReview.voteData = voteData
    serializedReview.canBeDeleted = review.userId === currentUserId ? true : false

    return serializedReview;
  }
}

export default ReviewSerializer;