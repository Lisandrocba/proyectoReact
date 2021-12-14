import { useContext, useEffect } from "react";
import { Link } from "react-router-dom"
import { CartContext } from "../../cartContext/CartContext";
import "./navBar.css"

export default function NavBar() {

    const { contadorProductos} = useContext(CartContext);
    
    


    return (
        <div className='divItem'>
            <div>
                
            </div>
            <div>  
                <Link to={`/`}>Inicio</Link>
                <Link to={`/cart`}>Carrito<span>{contadorProductos()}</span></Link>   
            </div>
       

        </div>
    )
}
