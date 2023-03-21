"use strict";
exports.__esModule = true;
var react_1 = require("react");
var categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
var Categories = function (_a) {
    var value = _a.value, onChangeCategory = _a.onChangeCategory;
    return (react_1["default"].createElement("div", { className: "categories" },
        react_1["default"].createElement("ul", null, categories.map(function (categoryName, i) { return (react_1["default"].createElement("li", { key: i, onClick: function () { return onChangeCategory(i); }, className: value === i ? 'active' : '' }, categoryName)); }))));
};
exports["default"] = Categories;
