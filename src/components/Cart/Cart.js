import React, { useContext } from 'react'
import { CartContext } from '../../cartContext/CartContext'

const Cart = () => {

    const {items, removeItems, limpiarCarrito} = useContext(CartContext);

   let totalPrecio = 0;
   
    
   items.map((item) =>{
        
        totalPrecio += item.cantidad * parseInt(item.precio);
    
        return totalPrecio;
    })

    console.log("total", totalPrecio)

    return (
        <div>
            
            { items.length === 0 ? <h1>Carrito sin productos</h1> :
            items.map(item=>
            <>    
            <button onClick={()=> limpiarCarrito()}>Limpiar Carrito</button>
                <>
                    <h1>{item.titulo}</h1>
                    <p>{item.cantidad}</p>
                    <button onClick={()=> removeItems(item.id)}>Remover Item</button>
                </>
            <h1>Total: {totalPrecio}</h1> 
            </>
            )  }   
        </div>
            )
}

export default Cart
