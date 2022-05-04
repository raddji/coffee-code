/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable("coffeeShops", (table) => {
    table.bigIncrements("id");
    table.string("name").notNullable();
    table.string("city").notNullable();
    table.string("address").notNullable();
    table.string("zip").notNullable();
    table.string("hours");
    table.boolean("wifi");
    table.boolean("parking");
    table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now());
    table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now());
  });
};

/**
 * @param {Knex} knex
 */
exports.down = async (knex) => {
  return knex.schema.dropTableIfExists("coffeeShops");
};
