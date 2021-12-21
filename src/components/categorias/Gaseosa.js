import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import ItemListaCategoria from '../ItemListCategoria.js/ItemListaCategoria';

export default function Gaseosa() {
    const [gase, setGase] = useState([]);

    useEffect(()=>{
        
        const db = getFirestore();
    
        const q = query(collection(db, "Items"), where('categoria', '==', 'Gaseosa'))
    
        getDocs(q).then(snapshot =>{
            setGase(snapshot.docs.map(doc =>({id: doc.id, ...doc.data() })))
        })

    },[])


    return (
        <ItemListaCategoria  key={gase.id}  producto={gase}/>
    )
}
