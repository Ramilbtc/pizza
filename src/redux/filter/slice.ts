import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterSliceState, Sort, SortPropertyEnum } from './types';

const initialState: FilterSliceState = {
  searchValue: '',
  categoryId: 0,
  pageCount: 1,
  sort: {
    name: 'популярности',
    sortProperty: SortPropertyEnum.PRICE_DESC,
  },
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload;
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setSort(state, action: PayloadAction<Sort>) {
      state.sort = action.payload;
    },
    setPageCount(state, action: PayloadAction<number>) {
      state.pageCount = action.payload;
    },
  },
});
export const { setCategoryId, setSort, setPageCount, setSearchValue } = filterSlice.actions;
export default filterSlice.reducer;
