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
exports.clearItems = exports.minusItem = exports.removeItem = exports.addItem = exports.selectCartItemById = exports.selectCart = exports.cartSlice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    totalPrice: 0,
    items: []
};
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
            state.totalPrice = state.items.reduce(function (sum, obj) {
                return obj.price * obj.count + sum;
            }, 0);
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
exports.selectCart = function (state) { return state.cart; };
exports.selectCartItemById = function (id) { return function (state) {
    return state.cart.items.find(function (obj) { return obj.id === id; });
}; };
exports.addItem = (_a = exports.cartSlice.actions, _a.addItem), exports.removeItem = _a.removeItem, exports.minusItem = _a.minusItem, exports.clearItems = _a.clearItems;
exports["default"] = exports.cartSlice.reducer;
