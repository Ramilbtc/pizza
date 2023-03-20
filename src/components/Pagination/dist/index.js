"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_paginate_1 = require("react-paginate");
var Pagination_module_scss_1 = require("./Pagination.module.scss");
var Pagination = function (_a) {
    var onChangePage = _a.onChangePage;
    return (react_1["default"].createElement(react_paginate_1["default"], { className: Pagination_module_scss_1["default"].root, breakLabel: "...", nextLabel: ">", onPageChange: function (event) { return onChangePage(event.selected + 1); }, pageRangeDisplayed: 4, pageCount: 3, previousLabel: "<" }));
};
exports["default"] = Pagination;
