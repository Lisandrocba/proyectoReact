import { useContext } from 'react';
import { CartContext } from '../../cartContext/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';

const ItemDetail = (props) =>{
    const {addItem} = useContext(CartContext)
    
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
            </div>
        </div>
        )
}

export default ItemDetail;

