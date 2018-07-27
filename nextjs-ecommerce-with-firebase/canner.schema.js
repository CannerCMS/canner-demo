const { home } = require("./schema/home.js");
const { about } = require("./schema/about.js");
const { guide } = require("./schema/guide.js");
const {
  coursePage,
  courseCategory,
  courses,
  course
} = require("./schema/course.js");
const { courseOrder } = require("./schema/courseOrder.js");
const { brand } = require("./schema/brand.js");
const { shop } = require("./schema/shop.js");
const { card } = require("./schema/card.js");
const { topLine } = require("./schema/topLine.js");
const { product, category } = require("./schema/product.js");
const { shipment, order, orderList } = require("./schema/order.js");
const { promoNo } = require("./schema/payment");

module.exports = {
  home,
  topLine,
  about,
  guide,
  order,
  coursePage,
  courseCategory,
  courses,
  course,
  courseOrder,
  brand,
  shop,
  category,
  product,
  shipment,
  orderList,
  promoNo,
  card
};
