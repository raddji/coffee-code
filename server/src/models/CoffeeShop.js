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