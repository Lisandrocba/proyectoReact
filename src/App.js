import NavBar from "./components/NavBar/NavBar";
import ItemListConteiner from './components/ItemListConteiner';
import { Routes, Route, Link } from "react-router-dom";
import ItemDetailConteiner from "./components/ItemDetailConteiner/ItemDetailConteiner";
import { CartProvider } from "./cartContext/CartContext";
import Cart from "./components/Cart/Cart";
import Juegos from "./components/categorias/Juegos";
import Comida from "./components/categorias/Comida";
import Limpieza from "./components/categorias/Limpieza";
import Gaseosa from "./components/categorias/Gaseosa";
import FinCompra from "./components/FinCompra/FinCompra";



function App() {
  return (
      <CartProvider >
        <NavBar />
        <div className="categoriasMenu">
          <Link className="linkMenu" to='Categoria/Comida'>
            Comida
          </Link>
          <Link className="linkMenu" to='Categoria/Juegos'>
            Juegos
          </Link>
          <Link className="linkMenu" to='Categoria/Limpieza'>
            Limpieza
          </Link>
          <Link className="linkMenu" to='Categoria/Gaseosa'>
            Gaseosa
          </Link>
        </div>
        
        <Routes >
            <Route path='Categoria/Comida' element={<Comida/>} />
            <Route path='Categoria/Juegos' element={<Juegos/>} />
            <Route path='Categoria/Limpieza' element={<Limpieza/>} />
            <Route path='Categoria/Gaseosa' element={<Gaseosa/>} />
            <Route path='/' element={<ItemListConteiner/>} /> 
            <Route path='item/:id' element={<ItemDetailConteiner/>} />
            <Route path='Cart' element={<Cart/>} />       
            <Route path='/compraFinalizada' element={<FinCompra/>} />       
           
           
        </Routes>
      </CartProvider>
  );
}

export default App;
