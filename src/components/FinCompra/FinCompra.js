import React, { useState } from 'react';
import './FinCompra.css';

export default function FinCompra({estado, setEstado}) {

    

    return (
       
        <div className='contenedorFinCompra'>
            <div className='FinCompra'>
                <encabezadoModal>
                    <h3 className='tituloEncabezado'>Fin de la Compra</h3>
                    <button className='buttonCerrar' onClick={()=>setEstado(false)}>
                        x
                    </button>
                </encabezadoModal>
                <div className='contenedorElementosFinCompra'>
                    <div>
                        <img className="logoApuModal" src='https://qc.miximages.com/main-qimg-923d95b1034aad3161ffc39622b4f2dc' />
                    </div>
                    <div>
                        <h3>Compra Finalizada</h3>
                        <p>Gracias por comprar en kwik-w-mart</p>
                    </div>
                </div>
            </div>
        </div> 
        
    )
}
