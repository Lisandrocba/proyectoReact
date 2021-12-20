import { useEffect, useState } from "react";
import getProductos from "../service/data";
import ItemList from './ItemList/ItemList';
import './ItemListConteiner.css';
import Categorias from './categorias/Categorias';
import {getFirestore, getDocs,collection} from 'firebase/firestore';



const ItemListConteiner = ({greeting}) =>{

    const [producto, setProducto] = useState([])

    //data.json
/*     useEffect(() => {
        getProductos
        .then(res =>{
           setProducto(res)
        })
        .catch(err => alert("ocurrio un error", err))
    }, []) */

    //firebase

    useEffect(()=>{
        const db = getFirestore();

        const itemCollection = collection(db, 'Items');
        getDocs(itemCollection).then((snapshot)=>{
            setProducto(snapshot.docs.map(doc =>({
                id: doc.id, ...doc.data()
            })))
        })
    },[])
    console.log(producto)

    return(
        <>
            <Categorias product = {producto}/>
            <div>
                <h1 className="tituloProductos">Productos</h1>
                <h3>{greeting}</h3>
                <ItemList key={producto.id} producto={producto}/>
            </div>
        </>
    )
}

export default ItemListConteiner;