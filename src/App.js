import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';

function App() {
  count[cartIsShown, setCartIsShown]=useState(false);
  function showCartHandler(){
    setCartIsShown(true);
  }

  return (
    <CartProvider>
      {cartIsShown && <div> Cart with edit source </div>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
