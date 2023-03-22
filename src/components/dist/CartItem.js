"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var cartSlice_1 = require("../redux/slices/cartSlice");
var CartItem = function (_a) {
    var id = _a.id, title = _a.title, price = _a.price, type = _a.type, size = _a.size, imageUrl = _a.imageUrl, count = _a.count;
    var dispatch = react_redux_1.useDispatch();
    var onClickPlus = function () {
        dispatch(cartSlice_1.addItem({
            id: id,
            title: title,
            price: price,
            type: type,
            size: size,
            imageUrl: imageUrl,
            count: count
        }));
    };
    var onClickMinus = function () {
        dispatch(cartSlice_1.minusItem(id));
    };
    var onClickRemove = function () {
        if (window.confirm('Ты действительно хочешь удалить товар?')) {
            dispatch(cartSlice_1.removeItem(id));
        }
    };
    return (react_1["default"].createElement("div", { className: "cart__item" },
        react_1["default"].createElement("div", { className: "cart__item-img" },
            react_1["default"].createElement("img", { className: "pizza-block__image", src: imageUrl, alt: "Pizza" })),
        react_1["default"].createElement("div", { className: "cart__item-info" },
            react_1["default"].createElement("h3", null, title),
            react_1["default"].createElement("p", null,
                type,
                ", ",
                size,
                " \u0441\u043C.")),
        react_1["default"].createElement("div", { className: "cart__item-count" },
            react_1["default"].createElement("div", { onClick: onClickMinus, className: "button button--outline button--circle cart__item-count-minus" },
                react_1["default"].createElement("svg", { width: "10", height: "10", viewBox: "0 0 10 10", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                    react_1["default"].createElement("path", { d: "M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z", fill: "#EB5A1E" }),
                    react_1["default"].createElement("path", { d: "M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z", fill: "#EB5A1E" }))),
            react_1["default"].createElement("b", null, count),
            react_1["default"].createElement("div", { onClick: onClickPlus, className: "button button--outline button--circle cart__item-count-plus" },
                react_1["default"].createElement("svg", { width: "10", height: "10", viewBox: "0 0 10 10", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                    react_1["default"].createElement("path", { d: "M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z", fill: "#EB5A1E" }),
                    react_1["default"].createElement("path", { d: "M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z", fill: "#EB5A1E" })))),
        react_1["default"].createElement("div", { className: "cart__item-price" },
            react_1["default"].createElement("b", null,
                price * count,
                " \u20BD")),
        react_1["default"].createElement("div", { className: "cart__item-remove" },
            react_1["default"].createElement("div", { onClick: onClickRemove, className: "button button--outline button--circle" },
                react_1["default"].createElement("svg", { width: "10", height: "10", viewBox: "0 0 10 10", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                    react_1["default"].createElement("path", { d: "M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z", fill: "#EB5A1E" }),
                    react_1["default"].createElement("path", { d: "M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z", fill: "#EB5A1E" }))))));
};
exports["default"] = CartItem;
