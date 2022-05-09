import { CoffeeShop } from "../../models/index.js";

class CoffeeShopSeeder {
  static async seed() {
    const coffeeShopsData = [
      {
        name: "Tatte",
        city: "Boston",
        address: " 125 summer st",
        zip: "02110",
        hours: "7:00 AM - 6:00 PM",
        wifi: true,
        parking: false,
      },
      {
        name: "Dunkin Donuts",
        city: "Cambridge",
        address: "2480 Mass Ave",
        zip: "02139",
        hours: "7:00 AM - 6:00 PM",
        wifi: false,
        parking: false,
      },
    ];
    for (const singleCoffeeShopData of coffeeShopsData) {
      const currentCoffeeShop = await CoffeeShop.query().findOne(singleCoffeeShopData);
      if (!currentCoffeeShop) {
        await CoffeeShop.query().insert(singleCoffeeShopData);
      }
    }
  }
}

export default CoffeeShopSeeder;
