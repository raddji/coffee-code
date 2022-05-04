const Model = require("./Model");

class CoffeeShop extends Model {
    static get tableName() {
      return "coffeeShops";
    }

  }

module.exports = CoffeeShop;
