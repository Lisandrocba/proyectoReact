import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faShoppingBasket} from "@fortawesome/free-solid-svg-icons"
import { useContext } from "react";
import { Link } from "react-router-dom"
import { CartContext } from "../../cartContext/CartContext";
import "./navBar.css"

export default function NavBar() {

    const { contadorProductos} = useContext(CartContext);
    
    


    return (
        <div style={{ display:'flex',borderBottom:'2px solid black', FlexDirection: 'row', justifyContent:'space-around',alignItems:'center' , padding:'2%', backgroundColor:'yellow'}}>
            <div>
                <img className="logo" src='https://ih1.redbubble.net/image.1336553148.7872/st,small,507x507-pad,600x600,f8f8f8.jpg' />
            </div>
            <div style={{display:'flex', FlexDirection: 'row', marginRight:'5%'}}>  
                <Link style={{ color: 'inherit', textDecoration: 'inherit', padding:'0 50%', fontSize:'1.5rem'}} to={`/`}>Inicio</Link>
                <Link style={{ color: 'inherit', textDecoration: 'inherit',display:'flex', FlexDirection: 'row',fontSize:'1.5rem'}} to={`/cart`}><FontAwesomeIcon icon={faShoppingBasket} /><span>{contadorProductos()}</span></Link>   
            </div>
        </div>
    )
}
