"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var Home_1 = require("./pages/Home");
var NotFound_1 = require("./pages/NotFound");
var Cart_1 = require("./pages/Cart");
var FullPizza_1 = require("./pages/FullPizza");
require("./scss/app.scss");
var MainLayout_1 = require("./layouts/MainLayout");
function App() {
    return (react_1["default"].createElement(react_router_dom_1.Routes, null,
        react_1["default"].createElement(react_router_dom_1.Route, { path: "/", element: react_1["default"].createElement(MainLayout_1["default"], null) },
            react_1["default"].createElement(react_router_dom_1.Route, { path: "", element: react_1["default"].createElement(Home_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "cart", element: react_1["default"].createElement(Cart_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "pizza/:id", element: react_1["default"].createElement(FullPizza_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "*", element: react_1["default"].createElement(NotFound_1["default"], null) }))));
}
exports["default"] = App;
