import { Review } from "../../models/index.js";

class ReviewSeeder {
  static async seed() {
    const reviewsData = [
      {
        coffeeShopId: 1,
        userId: 1,
        rating: 2,
        price: 4,
        noiseLevel: 3,
        vibe: "Not coder friendly",
        reviewText: "Too loud, not a place for long hours to code.",
      },
      {
        coffeeShopId: 2,
        userId: 1,
        rating: 1,
        price: 2,
        noiseLevel: 4,
        vibe: "Loud and busy during rush hours",
        reviewText: "Not a big fan of their coffee.",
      },
    ];
    for (const singleReview of reviewsData) {
      const currentReview = await Review.query().findOne(singleReview);
      if (!currentReview) {
        await Review.query().insert(singleReview);
      }
    }
  }
}

export default ReviewSeeder;
