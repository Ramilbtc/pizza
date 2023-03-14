"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.setItems = exports.pizzasSlice = void 0;

var _toolkit = require("@reduxjs/toolkit");

var initialState = {
  items: []
};
var pizzasSlice = (0, _toolkit.createSlice)({
  name: 'pizza',
  initialState: initialState,
  reducers: {
    setItems: function setItems(state, action) {
      state.items = action.payload.items;
    }
  }
});
exports.pizzasSlice = pizzasSlice;
var setItems = pizzasSlice.actions.setItems;
exports.setItems = setItems;
var _default = pizzasSlice.reducer;
exports["default"] = _default;