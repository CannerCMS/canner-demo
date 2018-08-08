var category = require("./category.json");
var product = require("./product.json");
var store = require("./store.json");
var fs = require("fs");

fs.writeFileSync(
  "./data/result.json",
  JSON.stringify({
    category,
    product,
    store
  }),
  { encodeing: "utf-8" }
);
