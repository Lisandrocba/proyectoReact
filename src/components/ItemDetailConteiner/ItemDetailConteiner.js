import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import getProductos from "../../service/data";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailConteiner =()=>{
    const[item, setItem] = useState({});
    const {id} = useParams();

    useEffect(() => {
        
        getProductos.then((res)=>{
            setItem(res.find((prod)=>prod.id === parseInt(id)))
        })

    }, [id])
    return(<ItemDetail item={item}/>)
}

export default ItemDetailConteiner;