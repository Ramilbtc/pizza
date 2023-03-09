"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.clearItems = exports.removeItem = exports.addItem = exports.cartSlice = void 0;

var _toolkit = require("@reduxjs/toolkit");

var initialState = {
  totalPrice: 0,
  items: []
};
var cartSlice = (0, _toolkit.createSlice)({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addItem: function addItem(state, action) {
      state.items.push(action.payload);
    },
    removeItem: function removeItem(state, action) {
      state.items = state.items.filter(function (obj) {
        return obj.id !== action.payload;
      });
    },
    clearItems: function clearItems(state) {
      state.items = [];
    }
  }
});
exports.cartSlice = cartSlice;
var _cartSlice$actions = cartSlice.actions,
    addItem = _cartSlice$actions.addItem,
    removeItem = _cartSlice$actions.removeItem,
    clearItems = _cartSlice$actions.clearItems;
exports.clearItems = clearItems;
exports.removeItem = removeItem;
exports.addItem = addItem;
var _default = cartSlice.reducer;
exports["default"] = _default;