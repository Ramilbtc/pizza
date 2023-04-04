"use strict";
exports.__esModule = true;
var react_loadable_1 = require("react-loadable");
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var Home_1 = require("./pages/Home");
require("./scss/app.scss");
var MainLayout_1 = require("./layouts/MainLayout");
// const Cart = React.lazy(() => import(/* webpackChunkName: "Cart" */ './pages/Cart'));
var Cart = react_loadable_1["default"]({
    loader: function () { return Promise.resolve().then(function () { return require(/* webpackChunkName: "Cart" */ './pages/Cart'); }); },
    loading: function () { return react_1["default"].createElement("div", null, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 ..."); }
});
var FullPizza = react_1["default"].lazy(function () { return Promise.resolve().then(function () { return require(/* webpackChunkName: "FullPizza" */ './pages/FullPizza'); }); });
var NotFound = react_1["default"].lazy(function () { return Promise.resolve().then(function () { return require(/* webpackChunkName: "NotFound" */ './pages/NotFound'); }); });
function App() {
    return (react_1["default"].createElement(react_router_dom_1.Routes, null,
        react_1["default"].createElement(react_router_dom_1.Route, { path: "/", element: react_1["default"].createElement(MainLayout_1["default"], null) },
            react_1["default"].createElement(react_router_dom_1.Route, { path: "", element: react_1["default"].createElement(Home_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "cart", element: react_1["default"].createElement(react_1.Suspense, { fallback: react_1["default"].createElement("div", null, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 ...") },
                    react_1["default"].createElement(Cart, null)) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "pizza/:id", element: react_1["default"].createElement(react_1.Suspense, { fallback: react_1["default"].createElement("div", null, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 ...") },
                    react_1["default"].createElement(FullPizza, null)) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "*", element: react_1["default"].createElement(react_1.Suspense, { fallback: react_1["default"].createElement("div", null, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 ...") },
                    react_1["default"].createElement(NotFound, null)) }))));
}
exports["default"] = App;
