import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";
import { CarritoContext } from "../../context/CarritoContext";
import { useContext } from "react";

const Cart = () => {
    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

    return (
        <>

            <div className="h-screen bg-gray-100 pt-20">
                <h1 className="mb-10 text-center text-2xl font-bold">Su Carrito</h1>
                <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">

                    {carrito.length === 0 ?
                        <div className="rounded-lg md:w-2/3">
                            <h2 className="text-lg font-bold">No hay productos en el carrito...</h2> <Link to="/">
                                <button
                                    className="mt-6 flex items-center justify-center w-full py-1.5 text-white border border-blue-500 rounded-md bg-blue-500 hover:bg-blue-00">
                                    Ver Productos
                                </button>
                            </Link>
                        </div>
                        :
                        <>
                            <div className="rounded-lg md:w-2/3">
                                {carrito.map((prod, index) => <CartItem key={index} {...prod} />)}
                                
                            </ div>
                            
                            <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                                <div className="mb-2 flex justify-between">
                                    <p className="text-gray-700">Productos</p>
                                    <p className="text-gray-700">{cantidadTotal}</p>
                                </div>

                                <hr className="my-4" />
                                <div className="flex justify-between">
                                    <p className="text-lg font-bold">Total</p>
                                    <div className="">
                                        <p className="mb-1 text-lg font-bold">${total} USD</p>
                                    </div>
                                </div>
                                <Link to="/checkout" > <button className="mt-6 w-full rounded-md bg-pink-300 py-1.5 font-medium text-white hover:bg-pink-400">Pagar</button> </Link>
                                <div className="flex-row">
                                    <Link to="/">
                                        <button
                                            className="mt-6 flex items-center justify-center w-full py-1.5 text-pink-600 border border-pink-600 rounded-md dark:text-white dark:border-pink-400 hover:bg-pink-400 hover:border-pink-400 hover:text-white dark:bg-pink-400 dark:hover:bg-pink-500 dark:hover:border-pink-500 dark:hover:text-white">
                                            Seguir Comprando
                                        </button>
                                    </Link>
                                    <button className="mt-6 w-full rounded-md bg-gray-300 py-1.5 font-medium text-black hover:text-white hover:bg-gray-400" onClick={() => vaciarCarrito()}> Vaciar Carrito </button>
                                </div>
                            </div>
                        </>
                    }

                </div>
            </div >
           
        </>
    )
}

export default Cart