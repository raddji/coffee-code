import ReviewSerializer from "./ReviewSerializer";

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

  static getDetails(coffeeShop) {
    const summarizedCoffeeShop = this.getSummary(coffeeShop);

    const reviews = await coffeeShop.$relatedQuery("reviews");

    summarizedCoffeeShop.reviews = reviews.map((review) => {
      return ReviewSerializer.getSummary(review);
    })

    return summarizedCoffeeShop;
  }
}

export default CoffeeShopSerializer