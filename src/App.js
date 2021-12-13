import NavBar from "./components/NavBar/NavBar";
import ItemListConteiner from './components/ItemListConteiner';
import { Routes, Route } from "react-router-dom";
import ItemDetailConteiner from "./components/ItemDetailConteiner/ItemDetailConteiner";
import { CartProvider } from "./cartContext/CartContext";
import Cart from "./components/Cart/Cart";


function App() {
  return (
    <div>
      <CartProvider >
        <NavBar />
        <Routes >
            <Route path='/' element={<ItemListConteiner/>} />
            <Route path='item/:id' element={<ItemDetailConteiner/>} />
            <Route path='/cart' element={<Cart/>} />
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
