"use strict";
exports.__esModule = true;
var react_1 = require("react");
var lodash_debounce_1 = require("lodash.debounce");
var Search_module_scss_1 = require("./Search.module.scss");
var react_redux_1 = require("react-redux");
var filterSlice_1 = require("../../redux/slices/filterSlice");
var Search = function () {
    var dispatch = react_redux_1.useDispatch();
    var _a = react_1["default"].useState(''), value = _a[0], setValue = _a[1];
    var inputRef = react_1["default"].useRef(null);
    var onClickClear = function () {
        var _a;
        dispatch(filterSlice_1.setSearchValue(''));
        setValue('');
        (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    };
    var updateSearchValue = react_1["default"].useCallback(lodash_debounce_1["default"](function (str) {
        dispatch(filterSlice_1.setSearchValue(str));
    }, 350), []);
    var onChangeInput = function (event) {
        setValue(event.target.value);
        updateSearchValue(event.target.value);
    };
    return (react_1["default"].createElement("div", { className: Search_module_scss_1["default"].root },
        react_1["default"].createElement("svg", { className: Search_module_scss_1["default"].icon, fill: "none", height: "24", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", viewBox: "0 0 24 24", width: "24", xmlns: "http://www.w3.org/2000/svg" },
            react_1["default"].createElement("circle", { cx: "11", cy: "11", r: "8" }),
            react_1["default"].createElement("line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65" })),
        react_1["default"].createElement("input", { ref: inputRef, value: value, onChange: onChangeInput, className: Search_module_scss_1["default"].input, placeholder: "\u041F\u043E\u0438\u0441\u043A \u043F\u0438\u0446\u0446\u044B..." }),
        value && (react_1["default"].createElement("svg", { onClick: onClickClear, className: Search_module_scss_1["default"].clearIcon, height: "48", viewBox: "0 0 48 48", width: "48", xmlns: "http://www.w3.org/2000/svg" },
            react_1["default"].createElement("path", { d: "M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z" }),
            react_1["default"].createElement("path", { d: "M0 0h48v48h-48z", fill: "none" })))));
};
exports["default"] = Search;
