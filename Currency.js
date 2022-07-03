"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Currency(_ref) {
  var _ref$currency = _ref.currency,
      currency = _ref$currency === void 0 ? "USD" : _ref$currency,
      children = _ref.children;
  var error = "";
  var formattedCurrency = null;

  try {
    formattedCurrency = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency
    }).format(children);
    error = "";
  } catch (e) {
    error = "Error: Please provide a valid currency code";
  }

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, error ? /*#__PURE__*/_react.default.createElement("p", {
    style: {
      color: "red"
    }
  }, error) : formattedCurrency);
}

var _default = Currency;
exports.default = _default;