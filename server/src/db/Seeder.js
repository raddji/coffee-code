/* eslint-disable no-console */
import { connection } from "../boot.js";
import CoffeeShopSeeder from "./seeders/CoffeeShopSeeder.js";
import ReviewSeeder from "./seeders/ReviewSeeder.js";

class Seeder {
  static async seed() {
    // include individual seed commands here
    console.log("seeding coffee shops");
    await CoffeeShopSeeder.seed();

    console.log("seeding reviews");
    await ReviewSeeder.seed();

    console.log("Done!");
    await connection.destroy();
  }
}

export default Seeder;
