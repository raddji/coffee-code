import ReviewSerializer from "./ReviewSerializer.js";

class CoffeeShopSerializer {
  static getSummary(coffeeShop) {
    const disallowedAttributes = ["createdAt", "updatedAt"];
    const serialzedCoffeeShop = {};

    Object.keys(coffeeShop).forEach((attribute) => {
      if (!disallowedAttributes.includes(attribute)) {
        serialzedCoffeeShop[attribute] = coffeeShop[attribute];
      }
    })

    return serialzedCoffeeShop;
  }

  static async getDetails(coffeeShop, currentUserId) {
    const summarizedCoffeeShop = this.getSummary(coffeeShop);

    const reviews = await coffeeShop.$relatedQuery("reviews");

    summarizedCoffeeShop.reviews = await Promise.all(reviews.map((review) => ReviewSerializer.getSummary(review, currentUserId)))

    return summarizedCoffeeShop;
  }
}

export default CoffeeShopSerializer