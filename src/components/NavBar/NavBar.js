import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faShoppingBasket} from "@fortawesome/free-solid-svg-icons"
import { useContext } from "react";
import { Link } from "react-router-dom"
import { CartContext } from "../../cartContext/CartContext";
import "./navBar.css"

export default function NavBar() {

    const { contadorProductos} = useContext(CartContext);
    
    


    return (
        <div className="contenedorMenu">
            <div>
                <img className="logo" src='https://render.fineartamerica.com/images/images-profile-flow/400/images-medium-large-5/kwik-e-mart-sign-paul-van-scott.jpg' />
            </div>
            <div className="contenedorLinks">  
                <Link className="linkInicio" to={`/`}>Inicio</Link>
                <Link className="linkCarrito"  to={`/cart`}><FontAwesomeIcon icon={faShoppingBasket} /><span>{contadorProductos()}</span></Link>   
            </div>
        </div>
    )
}
