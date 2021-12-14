import React, { useContext } from 'react'
import { CartContext } from '../../cartContext/CartContext'

const Cart = () => {

    const {items, removeItems, limpiarCarrito} = useContext(CartContext);
    
    


    return (
        <div>
            <button onClick={()=> limpiarCarrito()}>Limpiar Carrito</button>
            { items.map(item=>
            <>
            <h1>{item.titulo}</h1>
            <p>{item.cantidad}</p>
            <button onClick={()=> removeItems(item.id)}>Remover Item</button>
            </>
            )  }    
        </div>
            )
}

export default Cart
