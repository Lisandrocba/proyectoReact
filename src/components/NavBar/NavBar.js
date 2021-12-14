import { useContext, useEffect } from "react";
import { Link } from "react-router-dom"
import { CartContext } from "../../cartContext/CartContext";
import "./navBar.css"

export default function NavBar() {

    const {items} = useContext(CartContext);
    
    


    return (
        <Link className='divItem' to={`/cart`}>
            <div>
                
            </div>
            <div>
                <ul className="menu">
                    <li>Inicio</li>
                    <li>Carrito<span>{items.length}</span></li>
                </ul>
            </div>
        </Link>
    )
}
