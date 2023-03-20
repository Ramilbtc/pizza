"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var Header_1 = require("../components/Header");
var MainLayout = function () {
    return (react_1["default"].createElement("div", { className: "wrapper" },
        react_1["default"].createElement(Header_1["default"], null),
        react_1["default"].createElement("div", { className: "content" },
            react_1["default"].createElement(react_router_dom_1.Outlet, null))));
};
exports["default"] = MainLayout;
