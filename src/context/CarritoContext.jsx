import { useState, createContext, useEffect } from "react";

export const CarritoContext = createContext({
    carrito: [],
    total: 0,
    cantidadTotal: 0
})

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];
const cantidadTotalInicial = parseInt(JSON.parse(localStorage.getItem("cantidadTotal"))) || [];
const totalInicial = parseInt(JSON.parse(localStorage.getItem("total"))) || [];

export const CarritoProvider = ({ children }) => {
    const [carrito, setCarrito] = useState(carritoInicial);
    const [total, setTotal] = useState(totalInicial);
    const [cantidadTotal, setCantidadTotal] = useState(cantidadTotalInicial);

    //Función agregar producto al carrito: 
    const agregarAlCarrito = (item, cantidad) => {
        const productoExistente = carrito.find(prod => prod.item.id === item.id);

        if (!productoExistente) {
            setCarrito(prev => [...prev, { item, cantidad }]);
        } else {
            const carritoActualizado = carrito.map(prod => {
                if (prod.item.id === item.id) {
                    return { ...prod, cantidad: prod.cantidad + cantidad };
                } else {
                    return prod;
                }
            })
            setCarrito(carritoActualizado);
        }
        setCantidadTotal(prev => prev + cantidad);
        setTotal(prev => prev + (item.precio * cantidad))
    }

    //Función para eliminar productos del carrito: 
    const eliminarProducto = (id) => {
        const productoEliminado = carrito.find(prod => prod.item.id === id);

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

    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(carrito));
        localStorage.setItem("cantidadTotal", JSON.stringify(cantidadTotal));
        localStorage.setItem("total", JSON.stringify(total));
    }, [carrito])
    return (
        <CarritoContext.Provider value={{ carrito, total, cantidadTotal, agregarAlCarrito, eliminarProducto, vaciarCarrito }}> {children} </CarritoContext.Provider>
    )

}