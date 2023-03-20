"use strict";
exports.__esModule = true;
var react_1 = require("react");
var NotFoundBlock_module_scss_1 = require("./NotFoundBlock.module.scss");
console.log(NotFoundBlock_module_scss_1["default"]);
var NotFoundBlock = function () {
    return (react_1["default"].createElement("div", { className: NotFoundBlock_module_scss_1["default"].root },
        react_1["default"].createElement("h1", null,
            react_1["default"].createElement("span", null, "\u042D\u0445..."),
            react_1["default"].createElement("br", null),
            "H\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E ..."),
        react_1["default"].createElement("p", { className: NotFoundBlock_module_scss_1["default"].description }, "\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442")));
};
exports["default"] = NotFoundBlock;
