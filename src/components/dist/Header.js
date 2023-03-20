"use strict";
exports.__esModule = true;
var pizza_logo_svg_1 = require("../assets/img/pizza-logo.svg");
var react_router_dom_1 = require("react-router-dom");
var Search_1 = require("./Search");
var react_redux_1 = require("react-redux");
var cartSlice_1 = require("../redux/slices/cartSlice");
function Header() {
    var _a = react_redux_1.useSelector(cartSlice_1.selectCart), items = _a.items, totalPrice = _a.totalPrice;
    var location = react_router_dom_1.useLocation();
    var totalCount = items.reduce(function (sum, item) { return sum + item.count; }, 0);
    return (React.createElement("div", { className: "header" },
        React.createElement("div", { className: "container" },
            React.createElement(react_router_dom_1.Link, { to: "/" },
                React.createElement("div", { className: "header__logo" },
                    React.createElement("img", { width: "38", src: pizza_logo_svg_1["default"], alt: "Pizza logo" }),
                    React.createElement("div", null,
                        React.createElement("h1", null, "React Pizza"),
                        React.createElement("p", null, "\u0441\u0430\u043C\u0430\u044F \u0432\u043A\u0443\u0441\u043D\u0430\u044F \u043F\u0438\u0446\u0446\u0430 \u0432\u043E \u0432\u0441\u0435\u043B\u0435\u043D\u043D\u043E\u0439")))),
            React.createElement(Search_1["default"], null),
            React.createElement("div", { className: "header__cart" }, location.pathname !== '/cart' && (React.createElement(react_router_dom_1.Link, { to: "/cart", className: "button button--cart" },
                React.createElement("span", null, totalPrice),
                React.createElement("div", { className: "button__delimiter" }),
                React.createElement("svg", { width: "18", height: "18", viewBox: "0 0 18 18", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                    React.createElement("path", { d: "M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z", stroke: "white", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }),
                    React.createElement("path", { d: "M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z", stroke: "white", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }),
                    React.createElement("path", { d: "M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669", stroke: "white", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" })),
                React.createElement("span", null, totalCount)))))));
}
exports["default"] = Header;
