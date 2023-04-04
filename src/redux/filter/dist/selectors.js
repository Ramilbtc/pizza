"use strict";
exports.__esModule = true;
exports.selectFilter = exports.selectSort = void 0;
exports.selectSort = function (state) { return state.filter.sort; };
exports.selectFilter = function (state) { return state.filter; };
