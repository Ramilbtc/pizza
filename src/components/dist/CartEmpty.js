"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var empty_cart_png_1 = require("../assets/img/empty-cart.png");
var CartEmpty = function () {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: "cart cart--empty" },
            react_1["default"].createElement("h2", null,
                "\u041A\u043E\u0440\u0437\u0438\u043D\u0430 \u043F\u0443\u0441\u0442\u0430\u044F ",
                react_1["default"].createElement("span", null, "\uD83D\uDE15")),
            react_1["default"].createElement("p", null,
                "\u0412\u0435\u0440\u043E\u044F\u0442\u043D\u0435\u0439 \u0432\u0441\u0435\u0433\u043E, \u0432\u044B \u043D\u0435 \u0437\u0430\u043A\u0430\u0437\u044B\u0432\u0430\u043B\u0438 \u0435\u0449\u0451 \u043F\u0438\u0446\u0446\u0443.",
                react_1["default"].createElement("br", null),
                "\u0414\u043B\u044F \u0442\u043E\u0433\u043E, \u0447\u0442\u043E\u0431\u044B \u0437\u0430\u043A\u0430\u0437\u0430\u0442\u044C \u043F\u0438\u0446\u0446\u0443, \u043F\u0435\u0440\u0435\u0439\u0434\u0438 \u043D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443."),
            react_1["default"].createElement("img", { src: empty_cart_png_1["default"], alt: "Empty cart" }),
            react_1["default"].createElement(react_router_dom_1.Link, { to: "/", className: "button button--black" },
                react_1["default"].createElement("span", null, "\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043D\u0430\u0437\u0430\u0434")))));
};
exports["default"] = CartEmpty;
