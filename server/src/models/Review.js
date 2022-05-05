const Model = require("./Model");

class Review {
  static get tableName() {
    return "reviews"
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["rating", "vibe", "reviewText"],
      properties: {
        rating: { type: ["integer", "string"] },
        price: { type: ["integer", "string"] },
        noiseLevel: { type: "string" },
        vibe: { type: "string" },
        reviewText: { type: "string" }
      }
    }
  }

  static get relationMappings() {
    const { User, CoffeeShop } = require("./index.js")
    return {
      coffeeShops: {
        relation: Model.BelongsToOneRelation,
        modelClass: CoffeeShop,
        join: {
          from: "reviews.coffeeShopId",
          to: "coffeeShop.id"
        }
      },
      users: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: "reviews.userId",
          to: "users.id"
        }
      }
    }
  }
}

module.exports = Review;
