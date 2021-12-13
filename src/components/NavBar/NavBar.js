import { Link } from "react-router-dom"
import "./navBar.css"

export default function NavBar() {

    return (
        <Link className='divItem' to={`/cart`}>
            <div>
                
            </div>
            <div>
                <ul className="menu">
                    <li>Inicio</li>
                    <li>Carrito<span>{0}</span></li>
                </ul>
            </div>
        </Link>
    )
}
