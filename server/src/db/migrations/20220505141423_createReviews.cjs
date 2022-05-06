/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable("reviews", (table) => {
    table.bigIncrements("id").notNullable();
    table.bigInteger("coffeeShopId").notNullable().index().unsigned().references("coffeeShops.id");
    table.bigInteger("userId").notNullable().index().unsigned().references("users.id");
    table.integer("rating").notNullable();
    table.integer("price");
    table.integer("noiseLevel");
    table.string("vibe").notNullable();
    table.text("reviewText").notNullable();
    table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now());
    table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now());
  });
};

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  return knex.schema.dropTableIfExists("reviews");
};
