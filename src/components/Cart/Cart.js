import React, { useContext, useState } from 'react';
import { CartContext } from '../../cartContext/CartContext';
import './Cart.css';
import FinCompra from '../FinCompra/FinCompra';

const Cart = () => {

    const {items, removeItems, limpiarCarrito} = useContext(CartContext);
    const [estadoModal, setEstadoModal] = useState(false)
    


   let totalPrecio = 0;
   
    
   items.map((item) =>{
        
        totalPrecio += item.cantidad * parseInt(item.precio);
    
        return totalPrecio;
    })

    function terminarCompra (){
        limpiarCarrito();
        setEstadoModal(true);
        
    }

    return (
        <>
        <div className='carritoCompra'>
            
            { items.length === 0 ? 
            <div className='carritoVacio'>
                <img className="logoApu" src='https://qc.miximages.com/main-qimg-923d95b1034aad3161ffc39622b4f2dc' />
                <h1 clasName='tituloCarrito'>Tu carritos está vacíos</h1>
            </div>
            :
            items.map(item=>
            <>    
                <div className='itemCart'>
                    <img className='imagenItemCart mar' src={item.imagen}/>
                    <h3 className='mar pad'>{item.titulo}</h3>
                    <h3 className='mar pad'>{item.cantidad}</h3>
                    <button className='mar btnEliminarProd' onClick={()=> removeItems(item.id)}>Eliminar</button>
                    <h3>${item.cantidad * item.precio}</h3>
                </div>
               
            </>
            ) 
            
        }  
        { items.length === 0 ? null :
            <div className='totalCarrito'>
                <h1>Total: ${totalPrecio}</h1> 
                <button className='btnEliminarProd' onClick={()=> limpiarCarrito()}>Limpiar Carrito</button>
                <button className='btnEliminarProd' onClick={()=> terminarCompra()}>Terminar Compra</button>
            </div>}
        </div>
            {
                estadoModal &&
                <FinCompra estado={estadoModal} setEstado={setEstadoModal}/>
            }

        </>
            )
}

export default Cart
