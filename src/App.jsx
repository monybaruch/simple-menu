import Title from './components/Title';
import { useState } from 'react';
import menu from './data';
import Menu from './components/Menu';
const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  return (
    <main>
      <section>
        <Title text="Please Choose From Our delicious food menu:" />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};
export default App;
