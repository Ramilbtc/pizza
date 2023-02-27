import React from 'react';

import Header from './components/Header';
import Sort from './components/Sort';
import Categories from './components/Categories';
import Skeleton from './components/PizzaBlock/Skeleton';

import './scss/app.scss';
import PizzaBlock from './components/PizzaBlock';

function App() {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch('https://63fc3ef6859df29986b8ebfe.mockapi.io/items')
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setItems(data);
          setIsLoading(false);
        }, 1000);
      });
  }, []);

  // React.useEffect(() => {
  //   (async () => {
  //     try {
  //       const response = await fetch('https://63fc3ef6859df29986b8ebfe.mockapi.io/items');
  //       const data = await response.json();
  //       if (data) {
  //         setItems(data);
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   })();
  // }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {isLoading
              ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
              : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
