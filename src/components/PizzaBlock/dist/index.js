"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var react_router_dom_1 = require("react-router-dom");
var selectors_1 = require("../../redux/cart/selectors");
var slice_1 = require("../../redux/cart/slice");
var typesName = ['тонкое', 'традиционное'];
var PizzaBlock = function (_a) {
    var id = _a.id, title = _a.title, price = _a.price, imageUrl = _a.imageUrl, sizes = _a.sizes, types = _a.types;
    var dispatch = react_redux_1.useDispatch();
    var cartItem = react_redux_1.useSelector(selectors_1.selectCartItemById(id));
    var _b = react_1["default"].useState(0), activeType = _b[0], setActiveType = _b[1];
    var _c = react_1["default"].useState(0), activeSize = _c[0], setActiveSize = _c[1];
    var addedCount = cartItem ? cartItem.count : 0;
    var onClickAdd = function () {
        var item = {
            id: id,
            title: title,
            price: price,
            imageUrl: imageUrl,
            type: typesName[activeType],
            size: sizes[activeSize],
            count: 0
        };
        dispatch(slice_1.addItem(item));
    };
    return (react_1["default"].createElement("div", { className: "pizza-block-wrapper" },
        react_1["default"].createElement("div", { className: "pizza-block" },
            react_1["default"].createElement(react_router_dom_1.Link, { to: "/pizza/" + id },
                react_1["default"].createElement("img", { className: "pizza-block__image", src: imageUrl, alt: "Pizza" }),
                react_1["default"].createElement("h4", { className: "pizza-block__title" }, title)),
            react_1["default"].createElement("div", { className: "pizza-block__selector" },
                react_1["default"].createElement("ul", null, types.map(function (typeId, i) { return (react_1["default"].createElement("li", { key: typeId, onClick: function () { return setActiveType(i); }, className: activeType === i ? 'active' : '' }, typesName[typeId])); })),
                react_1["default"].createElement("ul", null, sizes.map(function (size, i) { return (react_1["default"].createElement("li", { key: size, onClick: function () { return setActiveSize(i); }, className: activeSize === i ? 'active' : '' },
                    size,
                    " \u0441\u043C.")); }))),
            react_1["default"].createElement("div", { className: "pizza-block__bottom" },
                react_1["default"].createElement("div", { className: "pizza-block__price" },
                    "\u043E\u0442 ",
                    price,
                    " \u20BD"),
                react_1["default"].createElement("button", { onClick: onClickAdd, className: "button button--outline button--add" },
                    react_1["default"].createElement("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                        react_1["default"].createElement("path", { d: "M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z", fill: "white" })),
                    react_1["default"].createElement("span", null, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C"),
                    addedCount > 0 && react_1["default"].createElement("i", null, addedCount))))));
};
exports["default"] = PizzaBlock;
