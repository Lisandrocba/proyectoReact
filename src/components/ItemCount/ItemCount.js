import { useState } from "react";
import './ItemCount.css';

function ItemCount({ item, stock, inicial, addItem }) {
    

    const [count, setCount] = useState(inicial);

    const mas = () => {
        const newValue = count + 1;
        if (newValue <= stock) {
            setCount(newValue);
        }
    };

    const quitItem = () => {
        const newValue = count - 1;
        if (newValue >= inicial) {
            setCount(newValue);
        }
    };



    return (
        <>
            <div className="cantidadProductos">
                <button onClick={mas}>+</button>
                <h2>{count}</h2>
                <button onClick={quitItem}>-</button>
            </div>
            <button onClick={() => addItem(item.id, item, count)}>Agregar al carrito</button>
        </>
    );
}

export default ItemCount;