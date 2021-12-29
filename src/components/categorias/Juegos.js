import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';

export default function Juegos() {

    const [juego, setJuego] = useState([]);

    useEffect(()=>{
        const db = getFirestore();
    
        const q = query(collection(db, "Items"), where('categoria', '==', 'Juegos'))
    
        getDocs(q).then(snapshot =>{
            setJuego(snapshot.docs.map(doc =>({id: doc.id, ...doc.data() })))
        })


    },[])
    

        return(
            <ItemList  key={juego.id}  producto={juego}/>   
        )
}
