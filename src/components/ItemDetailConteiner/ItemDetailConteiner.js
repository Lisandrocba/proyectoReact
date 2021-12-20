import { collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import getProductos from "../../service/data";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailConteiner =()=>{
    const[item, setItem] = useState({});
    const {id} = useParams();
    
    useEffect(() => {
        //filtro data.son
       /*  getProductos.then((res)=>{
            setItem(res.find((prod)=>prod.id === parseInt(id)))
        }) */

        const db = getFirestore();

       const itemDetail = doc(db, "Items", `${id}`);
       getDoc(itemDetail).then(snapshot=>{
           setItem({...snapshot.data(), id: snapshot.id})
       })
    }, [id])
    
    return(<ItemDetail item={item}/>)
}

export default ItemDetailConteiner;