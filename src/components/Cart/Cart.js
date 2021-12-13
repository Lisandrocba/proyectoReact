import React, { useContext } from 'react'
import { CartContext } from '../../cartContext/CartContext'

const Cart = () => {

    const {items, addItem} = useContext(CartContext);
    
    console.log(items)


    return (
        <div>
            { items.map(item=>
            <>
            <h1>{item.item.titulo}</h1>
            <p>{item.cantidad}</p>
            </>
            )  }    
        </div>
            )
}

export default Cart
