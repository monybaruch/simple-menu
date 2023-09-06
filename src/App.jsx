import Title from './components/Title';
import Menu from './components/Menu';
import { useState } from 'react';
import menu from './data';
import Categories from './components/Categories';
// const tempCategories = menu.map((item) => item.category);
// const tempSet = new Set(tempCategories);
// const tempItems = ['all', ...tempSet];
// this is the long way
const allCategories = ['all', ...new Set(menu.map((item) => item.category))]; //short way
const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);
  const filterItems = (category) => {
    console.log(category); //for testing only
    if (category === 'all') {
      setMenuItems(menu);
      return;
    }
    const newItems = menu.filter((item) => {
      if (item.category === category) {
        return category;
      }
    });
    setMenuItems(newItems);
  };
  return (
    <main>
      <section>
        <Title text="Please Choose From Our delicious food menu:" />
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};
export default App;
