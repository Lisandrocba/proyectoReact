import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../cartContext/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';

const ItemDetail = (props) =>{
    
    const {addItem, items} = useContext(CartContext)
    
    const {id, titulo, imagen, descripcion, precio, stock} = props.item;

    

    return(
         <div className="itemDetalle"  key={id}>
            <div>
                <img className="imgDetail" src={imagen} />
            </div>
            <div className="contenedorDescripcion">
                <p>{titulo}</p>
                <p>{descripcion}</p>
                <p>Precio: {precio}</p>
                <p>Stpck: {stock}</p>
                <ItemCount key={id} item = {props.item}  stock={stock} inicial={1} addItem = {addItem}/>
                { items.length === 0 ? null :
                    <Link to={`/cart`}><button>Terminar Compra</button></Link>
                
                }
            </div>
        </div> 
        )
}

export default ItemDetail;

