const Model = require("./Model.js");

class Review extends Model {
  static get tableName() {
    return "reviews";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["rating", "vibe", "reviewText"],
      properties: {
        rating: { type: ["integer", "string"] },
        price: { type: ["integer", "string"] },
        noiseLevel: { type: ["integer", "string"] },
        vibe: { type: "string" },
        reviewText: { type: "string" },
      },
    };
  }

  static get relationMappings() {
    const { User, CoffeeShop } = require("./index.js");
    return {
      coffeeShops: {
        relation: Model.BelongsToOneRelation,
        modelClass: CoffeeShop,
        join: {
          from: "reviews.coffeeShopId",
          to: "coffeeShops.id",
        },
      },
      users: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: "reviews.userId",
          to: "users.id",
        },
      },
    };
  }
}

module.exports = Review;
