import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { selectFilter, setCategoryId, setPageCount } from '../redux/slices/filterSlice';
import { fetchPizzas, selectPizzaData } from '../redux/slices/pizzaSlice';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Pagination from '../components/Pagination';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const categoryId = useSelector((state: any) => state.filter.categoryId);
  const sortType = useSelector((state: any) => state.filter.sort);
  const pageCount = useSelector((state: any) => state.filter.pageCount);
  const { items, status } = useSelector(selectPizzaData);

  const { searchValue } = useSelector(selectFilter);

  const onChangeCategory = (idx: number) => {
    dispatch(setCategoryId(idx));
  };

  const onChangePage = (page: number) => {
    dispatch(setPageCount(page));
  };

  React.useEffect(() => {
    async function fetchData() {
      const sortBy = sortType.sortProperty.replace('-', '');
      const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
      const category = categoryId > 0 ? `category=${categoryId}` : '';
      const search = searchValue ? `&search=${searchValue}` : '';

      dispatch(
        // @ts-ignore
        fetchPizzas({
          sortBy,
          order,
          category,
          search,
          pageCount,
        }),
      );
      window.scrollTo(0, 0);
    }
    fetchData();
  }, [categoryId, sortType, searchValue, pageCount]);

  const pizzas = items.map((obj: any) => <PizzaBlock key={obj.id} {...obj} />);

  const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);

  return (
    <>
      <div className="container">
        <div className="content__top">
          <Categories value={categoryId} onChangeCategory={onChangeCategory} />
          <Sort />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        {status === 'error' ? (
          <div>
            <h2>Произошла ошибка при запросе</h2>
          </div>
        ) : (
          <div className="content__items">{status === 'loading' ? skeletons : pizzas}</div>
        )}
        <Pagination onChangePage={onChangePage} />
      </div>
    </>
  );
};

export default Home;
