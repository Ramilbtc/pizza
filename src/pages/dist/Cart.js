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
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var react_redux_1 = require("react-redux");
var CartItem_1 = require("../components/CartItem");
var CartEmpty_1 = require("../components/CartEmpty");
var slice_1 = require("../redux/cart/slice");
var Cart = function () {
    var dispatch = react_redux_1.useDispatch();
    var _a = react_redux_1.useSelector(function (state) { return state.cart; }), items = _a.items, totalPrice = _a.totalPrice;
    var totalCount = items.reduce(function (sum, item) { return sum + item.count; }, 0);
    var onClickClear = function () {
        if (window.confirm('Очистить корзину?')) {
            dispatch(slice_1.clearItems());
        }
    };
    if (!totalPrice) {
        return react_1["default"].createElement(CartEmpty_1["default"], null);
    }
    return (react_1["default"].createElement("div", { className: "container container--cart" },
        react_1["default"].createElement("div", { className: "cart" },
            react_1["default"].createElement("div", { className: "cart__top" },
                react_1["default"].createElement("h2", { className: "content__title" },
                    react_1["default"].createElement("svg", { width: "18", height: "18", viewBox: "0 0 18 18", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                        react_1["default"].createElement("path", { d: "M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z", stroke: "white", "stroke-width": "1.8", "stroke-linecap": "round", "stroke-linejoin": "round" }),
                        react_1["default"].createElement("path", { d: "M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z", stroke: "white", "stroke-width": "1.8", "stroke-linecap": "round", "stroke-linejoin": "round" }),
                        react_1["default"].createElement("path", { d: "M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669", stroke: "white", "stroke-width": "1.8", "stroke-linecap": "round", "stroke-linejoin": "round" })),
                    "\u041A\u043E\u0440\u0437\u0438\u043D\u0430"),
                react_1["default"].createElement("div", { onClick: onClickClear, className: "cart__clear" },
                    react_1["default"].createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                        react_1["default"].createElement("path", { d: "M2.5 5H4.16667H17.5", stroke: "#B6B6B6", "stroke-width": "1.2", "stroke-linecap": "round", "stroke-linejoin": "round" }),
                        react_1["default"].createElement("path", { d: "M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z", stroke: "#B6B6B6", "stroke-width": "1.2", "stroke-linecap": "round", "stroke-linejoin": "round" }),
                        react_1["default"].createElement("path", { d: "M8.33337 9.16667V14.1667", stroke: "#B6B6B6", "stroke-width": "1.2", "stroke-linecap": "round", "stroke-linejoin": "round" }),
                        react_1["default"].createElement("path", { d: "M11.6666 9.16667V14.1667", stroke: "#B6B6B6", "stroke-width": "1.2", "stroke-linecap": "round", "stroke-linejoin": "round" })),
                    react_1["default"].createElement("span", null, "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u043A\u043E\u0440\u0437\u0438\u043D\u0443"))),
            react_1["default"].createElement("div", { className: "content__items" }, items.map(function (item) { return (react_1["default"].createElement(CartItem_1["default"], __assign({ key: item.id }, item))); })),
            react_1["default"].createElement("div", { className: "cart__bottom" },
                react_1["default"].createElement("div", { className: "cart__bottom-details" },
                    react_1["default"].createElement("span", null,
                        ' ',
                        "\u0412\u0441\u0435\u0433\u043E \u043F\u0438\u0446\u0446: ",
                        react_1["default"].createElement("b", null,
                            totalCount,
                            " \u0448\u0442."),
                        ' '),
                    react_1["default"].createElement("span", null,
                        ' ',
                        "\u0421\u0443\u043C\u043C\u0430 \u0437\u0430\u043A\u0430\u0437\u0430: ",
                        react_1["default"].createElement("b", null,
                            totalPrice,
                            " \u20BD"),
                        ' ')),
                react_1["default"].createElement("div", { className: "cart__bottom-buttons" },
                    react_1["default"].createElement(react_router_dom_1.Link, { to: "/", className: "button button--outline button--add go-back-btn" },
                        react_1["default"].createElement("svg", { width: "8", height: "14", viewBox: "0 0 8 14", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                            react_1["default"].createElement("path", { d: "M7 13L1 6.93015L6.86175 1", stroke: "#D3D3D3", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" })),
                        react_1["default"].createElement("span", null, "\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043D\u0430\u0437\u0430\u0434")),
                    react_1["default"].createElement("div", { className: "button pay-btn" },
                        react_1["default"].createElement("span", null, "\u041E\u043F\u043B\u0430\u0442\u0438\u0442\u044C \u0441\u0435\u0439\u0447\u0430\u0441")))))));
};
exports["default"] = Cart;
