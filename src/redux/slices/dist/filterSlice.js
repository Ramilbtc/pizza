"use strict";
var _a;
exports.__esModule = true;
exports.selectFilter = exports.selectSort = exports.setSearchValue = exports.setPageCount = exports.setSort = exports.setCategoryId = exports.filterSlice = exports.SortPropertyEnum = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var SortPropertyEnum;
(function (SortPropertyEnum) {
    SortPropertyEnum["RATING_DESC"] = "rating";
    SortPropertyEnum["RATING_ASC"] = "-rating";
    SortPropertyEnum["TITLE_DESC"] = "title";
    SortPropertyEnum["TITLE_ASC"] = "-title";
    SortPropertyEnum["PRICE_DESC"] = "price";
    SortPropertyEnum["PRICE_ASC"] = "-price";
})(SortPropertyEnum = exports.SortPropertyEnum || (exports.SortPropertyEnum = {}));
var initialState = {
    searchValue: '',
    categoryId: 0,
    pageCount: 1,
    sort: {
        name: 'популярности',
        sortProperty: SortPropertyEnum.PRICE_DESC
    }
};
exports.filterSlice = toolkit_1.createSlice({
    name: 'filter',
    initialState: initialState,
    reducers: {
        setCategoryId: function (state, action) {
            state.categoryId = action.payload;
        },
        setSearchValue: function (state, action) {
            state.searchValue = action.payload;
        },
        setSort: function (state, action) {
            state.sort = action.payload;
        },
        setPageCount: function (state, action) {
            state.pageCount = action.payload;
        }
    }
});
exports.setCategoryId = (_a = exports.filterSlice.actions, _a.setCategoryId), exports.setSort = _a.setSort, exports.setPageCount = _a.setPageCount, exports.setSearchValue = _a.setSearchValue;
exports.selectSort = function (state) { return state.filter.sort; };
exports.selectFilter = function (state) { return state.filter; };
exports["default"] = exports.filterSlice.reducer;
