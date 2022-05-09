/* eslint-disable no-console */
import { connection } from "../boot.js";
import CoffeeShopSeeder from "./seeders/CoffeeShopSeeder.js";

class Seeder {
  static async seed() {
    // include individual seed commands here
    console.log("seeding coffee shops");
    await CoffeeShopSeeder.seed();

    console.log("Done!");
    await connection.destroy();
  }
}

export default Seeder;
