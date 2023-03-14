"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.selectFilter = exports.selectSort = exports.setSearchValue = exports.setPageCount = exports.setSort = exports.setCategoryId = exports.filterSlice = void 0;

var _toolkit = require("@reduxjs/toolkit");

var initialState = {
  searchValue: '',
  categoryId: 0,
  pageCount: 1,
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
    },
    setSearchValue: function setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
    setSort: function setSort(state, action) {
      state.sort = action.payload;
    },
    setPageCount: function setPageCount(state, action) {
      state.pageCount = action.payload;
    }
  }
});
exports.filterSlice = filterSlice;
var _filterSlice$actions = filterSlice.actions,
    setCategoryId = _filterSlice$actions.setCategoryId,
    setSort = _filterSlice$actions.setSort,
    setPageCount = _filterSlice$actions.setPageCount,
    setSearchValue = _filterSlice$actions.setSearchValue;
exports.setSearchValue = setSearchValue;
exports.setPageCount = setPageCount;
exports.setSort = setSort;
exports.setCategoryId = setCategoryId;

var selectSort = function selectSort(state) {
  return state.filter.sort;
};

exports.selectSort = selectSort;

var selectFilter = function selectFilter(state) {
  return state.filter;
};

exports.selectFilter = selectFilter;
var _default = filterSlice.reducer;
exports["default"] = _default;