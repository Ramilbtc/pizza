"use strict";
exports.__esModule = true;
var client_1 = require("react-dom/client");
var react_router_dom_1 = require("react-router-dom");
var react_redux_1 = require("react-redux");
var App_1 = require("./App");
var store_1 = require("./redux/store");
var rootElem = document.getElementById('root');
if (rootElem) {
    var root = client_1["default"].createRoot(rootElem);
    root.render(React.createElement(react_router_dom_1.BrowserRouter, null,
        React.createElement(react_redux_1.Provider, { store: store_1.store },
            React.createElement(App_1["default"], null))));
}
