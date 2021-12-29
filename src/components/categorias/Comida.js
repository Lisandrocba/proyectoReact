import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList';

export default function Comida() {

    const [comida, setComida] = useState([]);

    useEffect(()=>{

        const db = getFirestore();
    
        const q = query(collection(db, "Items"), where('categoria', '==', 'Comida'))
    
        getDocs(q).then(snapshot =>{
            setComida(snapshot.docs.map(doc =>({id: doc.id, ...doc.data() })))
        })

    },[])


    return (
        <ItemList  key={comida.id}  producto={comida}/>
    )
}
