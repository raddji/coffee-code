const Model = require("./Model");

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
}

module.exports = Review;
