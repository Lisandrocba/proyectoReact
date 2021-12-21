import React from 'react'
import Item from '../Item/Item'

export default function ItemListaCategoria(props) {
    
    const prod = props.producto;

    return(
        <ul className="ItemList">
        {prod.map((prod =>{
               return(
                   <Item 
                   key={prod.id}
                   id={prod.id} 
                   imagen = {prod.imagen}
                   titulo = {prod.titulo} 
                   descripcion = {prod.descripcion}
                   categoria = {prod.categoria} 
                   precio = {prod.precio}
                   stock = {prod.stock}/> 
               )
           }))}
       </ul>
       
        
        
    )
}
