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
        name: { type: "string", minLength: 1, maxLength: 255 },
        city: { type: "string", minLength: 1, maxLength: 255 },
        address: { type: "string", minLength: 1, maxLength: 255 },
        zip: { type: "string", minLength: 1, maxLength: 255 },
        hours: { type: "string", minLength: 1, maxLength: 255 },
        wifi: { type: "boolean" },
        parking: { type: "boolean" },
      },
    };
  }
}

module.exports = CoffeeShop;
