import { createContext, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider =({children})=>{
    
    const [items, setItems] = useState([]);

    const isInItem =()=>{

    }

    const addItem =(id, item, contador)=>{
        
        setItems([...items, {item, cantidad : contador} ])
    }
    
    
    
    return(
        <CartContext.Provider value= {{items, addItem}}>
            {children}
        </CartContext.Provider>
    )
}