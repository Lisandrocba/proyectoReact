import { Link } from "react-router-dom";
import "./Item.css";


export default function Item({id, titulo, imagen, descripcion, categoria, precio, stock}) {

  

    return (
        <Link style={{display:'flex', flexDirection:'column', color: 'inherit', textDecoration: 'inherit'}} className='divItem' to={`/item/${id}`} key= {id}>
            
                <h2>{titulo}</h2>
                <img className="imgItem" src={imagen}/>
                <p className="itemDescripcion">{descripcion}</p>
                <p>Categoria: {categoria}</p>
                <p>Precio: {precio}</p>
                <p>Stock: {stock}</p>
        </Link>
    )
}
