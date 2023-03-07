"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.setCategoryId = exports.filterSlice = void 0;

var _toolkit = require("@reduxjs/toolkit");

var initialState = {
  categoryId: 0,
  sort: {
    name: 'популярности',
    sortProperty: 'rating'
  }
};
var filterSlice = (0, _toolkit.createSlice)({
  name: 'filter',
  initialState: initialState,
  reducers: {
    setCategoryId: function setCategoryId(state, action) {
      state.categoryId = action.payload;
    }
  }
});
exports.filterSlice = filterSlice;
var setCategoryId = filterSlice.actions.setCategoryId;
exports.setCategoryId = setCategoryId;
var _default = filterSlice.reducer;
exports["default"] = _default;