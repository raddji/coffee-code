// include all of your models here using CommonJS requires
const User = require("./User.js");
const CoffeeShop = require("./CoffeeShop.js");
const Review = require("./Review.js")
const Vote = require("./Vote.js")

module.exports = { User, CoffeeShop, Review, Vote };
