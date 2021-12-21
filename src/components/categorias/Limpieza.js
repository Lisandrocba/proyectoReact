import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import React, { useState } from 'react'
import ItemList from '../ItemList/ItemList';

export default function Limpieza() {

    const [limpieza, setLimpieza] = useState([]);

    const db = getFirestore();

    const q = query(collection(db, "Items"), where('categoria', '==', 'Limpieza'))

    getDocs(q).then(snapshot =>{
        setLimpieza(snapshot.docs.map(doc =>({id: doc.id, ...doc.data() })))
    })

    return (
        <ItemList  key={limpieza.id}  producto={limpieza}/>
    )
}
