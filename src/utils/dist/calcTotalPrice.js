"use strict";
exports.__esModule = true;
exports.calcTotalPrice = void 0;
exports.calcTotalPrice = function (items) {
    return items.reduce(function (sum, obj) {
        return obj.price * obj.count + sum;
    }, 0);
};
