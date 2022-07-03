"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = formatCurrency;

function formatCurrency(currency, amount) {
  try {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency
    }).format(amount);
  } catch (e) {
    return "Error: Please provide a valid currency code";
  }
}