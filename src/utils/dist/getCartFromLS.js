"use strict";
exports.__esModule = true;
exports.getCartFromLS = void 0;
var calcTotalPrice_1 = require("./calcTotalPrice");
exports.getCartFromLS = function () {
    var data = localStorage.getItem('cart');
    var items = data ? JSON.parse(data) : [];
    var totalPrice = calcTotalPrice_1.calcTotalPrice(items);
    return {
        items: items,
        totalPrice: totalPrice
    };
};
