import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import React, { useState } from 'react'
import ItemList from '../ItemList/ItemList'

export default function Categorias(props) {

    const [juego, setJuego] = useState([]);
    const [comida, setComida] = useState([]);
    const [limpieza, setLimpieza] = useState([]);
    const [gaseosa, setGaseosa] = useState([]);

    


    function juegos (){
        
        const db = getFirestore();

        const q = query(collection(db, "Items"), where('categoria', '==', 'Juegos'))

        getDocs(q).then(snapshot =>{
            setJuego(snapshot.docs.map(doc =>({id: doc.id, ...doc.data() })))
        })

    }

    function comidas (){
        
        const db = getFirestore();

        const q = query(collection(db, "Items"), where('categoria', '==', 'Comida'))

        getDocs(q).then(snapshot =>{
            setComida(snapshot.docs.map(doc =>({id: doc.id, ...doc.data() })))
        })

    }

    function limpiezas (){
        
        const db = getFirestore();

        const q = query(collection(db, "Items"), where('categoria', '==', 'Limpieza'))

        getDocs(q).then(snapshot =>{
            setLimpieza(snapshot.docs.map(doc =>({id: doc.id, ...doc.data() })))
        })

    }

    function gaseosas (){
        
        const db = getFirestore();

        const q = query(collection(db, "Items"), where('categoria', '==', 'Gaseosa'))

        getDocs(q).then(snapshot =>{
            setGaseosa(snapshot.docs.map(doc =>({id: doc.id, ...doc.data() })))
        })

    }
    console.log(gaseosa)

    

    return (
        <div>
            <button onClick={juegos}>Juegos</button>
            <button onClick={comidas}>Comida</button>
            <button onClick={limpiezas}>Limpieza</button>
            <button onClick={gaseosas}>Gaseosas</button>
        </div>
    )
}
