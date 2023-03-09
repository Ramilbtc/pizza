"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _filterSlice = _interopRequireDefault(require("./slices/filterSlice"));

var _cartSlice = _interopRequireDefault(require("./slices/cartSlice"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var store = (0, _toolkit.configureStore)({
  reducer: {
    filter: _filterSlice["default"],
    cart: _cartSlice["default"]
  }
});
exports.store = store;