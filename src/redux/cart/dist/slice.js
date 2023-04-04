"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var _a;
exports.__esModule = true;
exports.clearItems = exports.minusItem = exports.removeItem = exports.addItem = exports.cartSlice = void 0;
var calcTotalPrice_1 = require("../../utils/calcTotalPrice");
var getCartFromLS_1 = require("../../utils/getCartFromLS");
var toolkit_1 = require("@reduxjs/toolkit");
var _b = getCartFromLS_1.getCartFromLS(), items = _b.items, totalPrice = _b.totalPrice;
var initialState = getCartFromLS_1.getCartFromLS();
exports.cartSlice = toolkit_1.createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addItem: function (state, action) {
            var findItem = state.items.find(function (obj) { return obj.id === action.payload.id; });
            if (findItem) {
                findItem.count++;
            }
            else {
                state.items.push(__assign(__assign({}, action.payload), { count: 1 }));
            }
            state.totalPrice = calcTotalPrice_1.calcTotalPrice(state.items);
        },
        minusItem: function (state, action) {
            var findItem = state.items.find(function (obj) { return obj.id === action.payload; });
            if (findItem) {
                findItem.count--;
            }
        },
        removeItem: function (state, action) {
            state.items = state.items.filter(function (obj) { return obj.id !== action.payload; });
        },
        clearItems: function (state) {
            state.items = [];
            state.totalPrice = 0;
        }
    }
});
exports.addItem = (_a = exports.cartSlice.actions, _a.addItem), exports.removeItem = _a.removeItem, exports.minusItem = _a.minusItem, exports.clearItems = _a.clearItems;
exports["default"] = exports.cartSlice.reducer;
