//1) Voy a importar el hook useState y createContext que me permite crear un contexto que almacenará toda la logica de mi carrillo de compras. 

import { useState, createContext } from "react";

//2) Creamos el nuevo contexto. 
//Le podemos dar como valor inicial, un objeto que tiene las siguientes propiedades:

export const CarritoContext = createContext({
    carrito: [],
    total: 0,
    cantidadTotal: 0
})

//3) Creamos un componente llamado "CarritoProvider".
//también lo pueden encontrar en la teoría como "Proveedor de Contextos". 

export const CarritoProvider = ({ children }) => {
    //Usamos useState para generar algunos estados para almacenar el carrito, el total y la cantidadTotal. 
    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);
    const [cantidadTotal, setCantidadTotal] = useState(0);

    //Metemos unos console.log de forma momentánea para ver que se este actualizando todo correctamente. 
    console.log(carrito);
    console.log("Monto total de la compra: ", total);
    console.log("Cantidad de items: ", cantidadTotal);

    //4) Agregamos algunos métodos al proveedor de contexto para manipular el carrito de compras: 

    //Función agregar producto al carrito: 

    const agregarAlCarrito = (item, cantidad) => {
        const productoExistente = carrito.find(prod => prod.item.id === item.id);

        if (!productoExistente) {
            setCarrito(prev => [...prev, { item, cantidad }]);
            setCantidadTotal(prev => prev + cantidad);
            setTotal(prev => prev + (item.precio * cantidad))
            /*La sintaxis: prev => [...prev, {item, cantidad}] se utiliza para crear un nuevo array a partir del estado anterior del carrito (prev) y agregar un nuevo objeto, que representa el nuevo producto.*/
        } else {
            const carritoActualizado = carrito.map(prod => {
                if (prod.item.id === item.id) {
                    return { ...prod, cantidad: prod.cantidad + cantidad };
                } else {
                    return prod;
                }
            })
            setCarrito(carritoActualizado);
            setCantidadTotal(prev => prev + cantidad);
            setTotal(prev => prev + (item.precio * cantidad))
        }
    }

    //Función para eliminar productos del carrito: 

    const eliminarProducto = (id) => {
        //me guardo una referencia del producto que vamos a borrar: 
        const productoEliminado = carrito.find(prod => prod.item.id === id);

        //Ahora lo elimino del carrito: 
        const carritoActualizado = carrito.filter(prod => prod.item.id !== id);

        setCarrito(carritoActualizado);
        setCantidadTotal(prev => prev - productoEliminado.cantidad);
        setTotal(prev => prev - (productoEliminado.item.precio * productoEliminado.cantidad));
    }

    //Función para vaciar el carrito de compras: 

    const vaciarCarrito = () => {
        setCarrito([]);
        setTotal(0);
        setCantidadTotal(0);
    }

    //5) Usamos el value para enviar el valor del carrito, total, cantidadTotal y las funciones: 

    return (
        <CarritoContext.Provider value={{ carrito, total, cantidadTotal, agregarAlCarrito, eliminarProducto, vaciarCarrito }}> {children} </CarritoContext.Provider>
    )

    //Le tenemos que agregar el children, que es una propiedad especial que utilizamos para representar a todos esos componentes qeu puedan necesitar el carrito y sus funciones. 
}