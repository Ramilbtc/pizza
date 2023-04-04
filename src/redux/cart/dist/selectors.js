"use strict";
exports.__esModule = true;
exports.selectCartItemById = exports.selectCart = void 0;
exports.selectCart = function (state) { return state.cart; };
exports.selectCartItemById = function (id) { return function (state) {
    return state.cart.items.find(function (obj) { return obj.id === id; });
}; };
