const Model = require("./Model");

class CoffeeShop extends Model {
  static get tableName() {
    return "coffeeShops";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["name", "city", "address", "zip"],
      properties: {
        name: { type: "string" },
        city: { type: "string" },
        address: { type: "string" },
        zip: { type: "string" },
        hours: { type: "string" },
        wifi: { type: ["boolean", "string"] },
        parking: { type: ["boolean", "string"] },
      },
    };
  }
}

module.exports = CoffeeShop;