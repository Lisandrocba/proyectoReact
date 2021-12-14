import { createContext, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider =({children})=>{
    
    const [items, setItems] = useState([]);

    const isInItem =(id)=>{
        const found = items.find(item => item.id === id);
        return found
    }

    const addItem =(id, item, contador)=>{
        isInItem(id) ? setItems(items.map(prod => {
            if(prod.id = id){
                prod.cantidad += contador
                return  prod;
            }
        })) :
        setItems([...items, {id: item.id, imagen: item.imagen, titulo : item.titulo, descripcion: item.descripcion, precio: item.precio, stock: item.stock, cantidad: item.contador} ])
    }
    
    const removeItems = (id) =>{
        setItems(items.filter(item => item.id !== id))
    }

    const limpiarCarrito = () =>{
        setItems([]);
    }
    
    return(
        <CartContext.Provider value= {{items, addItem, removeItems, limpiarCarrito}}>
            {children}
        </CartContext.Provider>
    )
}