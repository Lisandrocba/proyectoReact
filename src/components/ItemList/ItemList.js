import Item from '../Item/Item';
import './ItemList.css'

const ItemList =({producto}) =>{
    
    return(
        <ul className="ItemList">
           {producto.map((prod =>{
               return(
                   <Item 
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

export default ItemList