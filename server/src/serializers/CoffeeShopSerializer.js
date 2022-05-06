
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


}