"use strict";
exports.__esModule = true;
exports.useAppDispatch = exports.store = void 0;
var react_redux_1 = require("react-redux");
var toolkit_1 = require("@reduxjs/toolkit");
var slice_1 = require("./filter/slice");
var slice_2 = require("./cart/slice");
var slice_3 = require("./pizza/slice");
exports.store = toolkit_1.configureStore({
    reducer: { filter: slice_1["default"], cart: slice_2["default"], pizza: slice_3["default"] }
});
exports.useAppDispatch = function () { return react_redux_1.useDispatch(); };
