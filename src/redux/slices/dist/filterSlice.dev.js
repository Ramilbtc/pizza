"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.incrementByAmount = exports.decrement = exports.increment = exports.filterSlice = void 0;

var _toolkit = require("@reduxjs/toolkit");

var initialState = {
  value: 0
};
var filterSlice = (0, _toolkit.createSlice)({
  name: 'filter',
  initialState: initialState,
  reducers: {
    increment: function increment(state) {
      state.value += 1;
    },
    decrement: function decrement(state) {
      state.value -= 1;
    },
    incrementByAmount: function incrementByAmount(state, action) {
      state.value += action.payload;
    }
  }
});
exports.filterSlice = filterSlice;
var _filterSlice$actions = filterSlice.actions,
    increment = _filterSlice$actions.increment,
    decrement = _filterSlice$actions.decrement,
    incrementByAmount = _filterSlice$actions.incrementByAmount;
exports.incrementByAmount = incrementByAmount;
exports.decrement = decrement;
exports.increment = increment;
var _default = filterSlice.reducer;
exports["default"] = _default;