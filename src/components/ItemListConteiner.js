import { useEffect, useState } from "react";
import getProductos from "../service/data";
import ItemList from './ItemList/ItemList';
import './ItemListConteiner.css';



const ItemListConteiner = ({greeting}) =>{

    const [producto, setProducto] = useState([])

    useEffect(() => {
        getProductos
        .then(res =>{
           setProducto(res)
        })
        .catch(err => alert("ocurrio un error", err))
    }, [])


    return(
        <div>
            <h1 className="tituloProductos">Productos</h1>
            <h3>{greeting}</h3>
            <ItemList producto={producto}/>
        </div>
    )
}

export default ItemListConteiner;