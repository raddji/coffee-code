import { Review } from "../../models/index.js";

class ReviewSeeder {
  static async seed() {
    const reviewsData = [
      {
        coffeeShopId: 3,
        userId: 1,
        rating: 2,
        price: 4,
        noiseLevel: 3,
        vibe: "Not coder friendly",
        reviewText: "Too loud, not a place for long hours to code. Great coffee though!",
      },
      {
        coffeeShopId: 4,
        userId: 1,
        rating: 1,
        price: 2,
        noiseLevel: 4,
        vibe: "Loud and busy during rush hours",
        reviewText: "Not a big fan of their coffee, don't like people hanging around too long.",
      },
      {
        coffeeShopId: 1,
        userId: 2,
        rating: 5,
        price: 2,
        noiseLevel: 2,
        vibe: "One of my favorite places to code",
        reviewText: "This is a really great place to code in public, to make sure everyone else knows that I am a programmer.",
      },
      {
        coffeeShopId: 2,
        userId: 2,
        rating: 4,
        price: 3,
        noiseLevel: 3,
        vibe: "Great spot that is closer to home",
        reviewText: "Perfect for when I am not in the city but I still need to code in public for some reason.",
      }
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
