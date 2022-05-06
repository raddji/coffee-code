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

  static get relationMappings() {
    const { Review } = require("./index.js")
    return {
      reviews: {
        relation: Model.HasManyRelation,
        modelClass: Review,
        join: {
          from: "coffeeShops.id",
          to: "reviews.coffeeShopId"
        }
      }
    }
  }
}

module.exports = CoffeeShop;