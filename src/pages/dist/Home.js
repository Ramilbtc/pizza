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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var filterSlice_1 = require("../redux/slices/filterSlice");
var pizzaSlice_1 = require("../redux/slices/pizzaSlice");
var Categories_1 = require("../components/Categories");
var Sort_1 = require("../components/Sort");
var PizzaBlock_1 = require("../components/PizzaBlock");
var Skeleton_1 = require("../components/PizzaBlock/Skeleton");
var Pagination_1 = require("../components/Pagination");
var store_1 = require("../redux/store");
var Home = function () {
    var dispatch = store_1.useAppDispatch();
    var categoryId = react_redux_1.useSelector(function (state) { return state.filter.categoryId; });
    var sortType = react_redux_1.useSelector(function (state) { return state.filter.sort; });
    var pageCount = react_redux_1.useSelector(function (state) { return state.filter.pageCount; });
    var _a = react_redux_1.useSelector(pizzaSlice_1.selectPizzaData), items = _a.items, status = _a.status;
    var searchValue = react_redux_1.useSelector(filterSlice_1.selectFilter).searchValue;
    var onChangeCategory = function (idx) {
        dispatch(filterSlice_1.setCategoryId(idx));
    };
    var onChangePage = function (page) {
        dispatch(filterSlice_1.setPageCount(page));
    };
    react_1["default"].useEffect(function () {
        function fetchData() {
            return __awaiter(this, void 0, void 0, function () {
                var sortBy, order, category, search;
                return __generator(this, function (_a) {
                    sortBy = sortType.sortProperty.replace('-', '');
                    order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
                    category = categoryId > 0 ? "category=" + categoryId : '';
                    search = searchValue ? "&search=" + searchValue : '';
                    dispatch(pizzaSlice_1.fetchPizzas({
                        sortBy: sortBy,
                        order: order,
                        category: category,
                        search: search,
                        pageCount: pageCount
                    }));
                    window.scrollTo(0, 0);
                    return [2 /*return*/];
                });
            });
        }
        fetchData();
    }, [categoryId, sortType, searchValue, pageCount]);
    var pizzas = items.map(function (obj) { return react_1["default"].createElement(PizzaBlock_1["default"], __assign({ key: obj.id }, obj)); });
    var skeletons = __spreadArrays(new Array(6)).map(function (_, index) { return react_1["default"].createElement(Skeleton_1["default"], { key: index }); });
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: "container" },
            react_1["default"].createElement("div", { className: "content__top" },
                react_1["default"].createElement(Categories_1["default"], { value: categoryId, onChangeCategory: onChangeCategory }),
                react_1["default"].createElement(Sort_1["default"], null)),
            react_1["default"].createElement("h2", { className: "content__title" }, "\u0412\u0441\u0435 \u043F\u0438\u0446\u0446\u044B"),
            status === 'error' ? (react_1["default"].createElement("div", null,
                react_1["default"].createElement("h2", null, "\u041F\u0440\u043E\u0438\u0437\u043E\u0448\u043B\u0430 \u043E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0437\u0430\u043F\u0440\u043E\u0441\u0435"))) : (react_1["default"].createElement("div", { className: "content__items" }, status === 'loading' ? skeletons : pizzas)),
            react_1["default"].createElement(Pagination_1["default"], { onChangePage: onChangePage }))));
};
exports["default"] = Home;
