"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var filterSlice_1 = require("../redux/slices/filterSlice");
var list = [
    { name: 'популярности (DESC)', sortProperty: 'rating' },
    { name: 'популярности (ASC)', sortProperty: '-rating' },
    { name: 'цене (DESC)', sortProperty: 'price' },
    { name: 'цене (ASC)', sortProperty: '-price' },
    { name: 'алфавиту (DESC)', sortProperty: 'title' },
    { name: 'алфавиту (ASC)', sortProperty: '-title' },
];
function Sort() {
    var dispatch = react_redux_1.useDispatch();
    var sort = react_redux_1.useSelector(filterSlice_1.selectSort);
    var sortRef = react_1["default"].useRef(null);
    var _a = react_1["default"].useState(false), open = _a[0], setOpen = _a[1];
    var onClickListItem = function (obj) {
        dispatch(filterSlice_1.setSort(obj));
        setOpen(false);
    };
    // React.useEffect(() => {
    //   const handleClickOutside = (event) => {
    //     if (event.path.includes(sortRef.current)) {
    //       setOpen(false);
    //     }
    //   };
    //   document.body.addEventListener('click', handleClickOutside);
    //   return () => {
    //     document.body.removeEventListener('click', handleClickOutside);
    //   }
    // }, []);
    return (react_1["default"].createElement("div", { ref: sortRef, className: "sort" },
        react_1["default"].createElement("div", { className: "sort__label" },
            react_1["default"].createElement("svg", { width: "10", height: "6", viewBox: "0 0 10 6", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                react_1["default"].createElement("path", { d: "M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z", fill: "#2C2C2C" })),
            react_1["default"].createElement("b", null, "\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430 \u043F\u043E:"),
            react_1["default"].createElement("span", { onClick: function () { return setOpen(!open); } }, sort.name)),
        open && (react_1["default"].createElement("div", { className: "sort__popup" },
            react_1["default"].createElement("ul", null, list.map(function (obj, i) { return (react_1["default"].createElement("li", { key: i, onClick: function () { return onClickListItem(obj); }, className: sort.sortProperty === obj.sortProperty ? 'active' : '' }, obj.name)); }))))));
}
exports["default"] = Sort;
