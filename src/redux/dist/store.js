"use strict";
exports.__esModule = true;
exports.useAppDispatch = exports.store = void 0;
var react_redux_1 = require("react-redux");
var toolkit_1 = require("@reduxjs/toolkit");
var filterSlice_1 = require("./slices/filterSlice");
var cartSlice_1 = require("./slices/cartSlice");
var pizzaSlice_1 = require("./slices/pizzaSlice");
exports.store = toolkit_1.configureStore({
    reducer: { filter: filterSlice_1["default"], cart: cartSlice_1["default"], pizza: pizzaSlice_1["default"] }
});
exports.useAppDispatch = function () { return react_redux_1.useDispatch(); };
