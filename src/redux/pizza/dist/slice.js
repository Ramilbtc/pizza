"use strict";
exports.__esModule = true;
exports.setItems = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var types_1 = require("./types");
var asyncActions_1 = require("./asyncActions");
var initialState = {
    items: [],
    status: types_1.Status.LOADING
};
var pizzaSlice = toolkit_1.createSlice({
    name: 'pizza',
    initialState: initialState,
    reducers: {
        setItems: function (state, action) {
            state.items = action.payload;
        }
    },
    extraReducers: function (builder) {
        builder.addCase(asyncActions_1.fetchPizzas.pending, function (state, action) {
            state.status = types_1.Status.LOADING;
            state.items = [];
        });
        builder.addCase(asyncActions_1.fetchPizzas.fulfilled, function (state, action) {
            state.items = action.payload;
            state.status = types_1.Status.SUCCESS;
        });
        builder.addCase(asyncActions_1.fetchPizzas.rejected, function (state, action) {
            state.status = types_1.Status.ERROR;
            state.items = [];
        });
    }
});
exports.setItems = pizzaSlice.actions.setItems;
exports["default"] = pizzaSlice.reducer;
