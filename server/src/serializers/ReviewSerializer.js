class ReviewSerializer {
  static getSummary(review) {
    const disallowedAttributes = ["createdAt", "updatedAt", "coffeeShopId", "userId"];
    const serialzedReview = {};

    Object.keys(review).forEach((attribute) => {
      if (!disallowedAttributes.includes(attribute)) {
        serialzedReview[attribute] = review[attribute];
      }
    })

    return serialzedReview;
  }
}

export default ReviewSerializer;