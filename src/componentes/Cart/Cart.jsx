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
               
                    <div className="rounded-lg md:w-2/3">
                        {
                            cantidadTotal === 0 ? 
                            <><h2 className="text-lg font-bold">No hay productos en el carrito...</h2> <Link to="/" className="hover:text-blue-600 underline text-xl"> Ver Productos </Link></>
                            : 
                            carrito.map((prod, index) => <CartItem key={index} {...prod} />)
                        }
                    </div>
                    <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                        <div className="mb-2 flex justify-between">
                            <p className="text-gray-700">Productos</p>
                            <p className="text-gray-700">{cantidadTotal}</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="text-gray-700">I.V.A</p>
                            <p className="text-gray-700">20%</p>
                        </div>
                        <hr className="my-4" />
                        <div className="flex justify-between">
                            <p className="text-lg font-bold">Total</p>
                            <div className="">
                                <p className="mb-1 text-lg font-bold">${total} USD</p>
                                <p className="text-sm text-gray-700">including VAT</p>
                            </div>
                        </div>
                        <Link to="/checkout" > <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Pagar</button> </Link>
                        <div className="flex-row">
                        <button className="mt-6 w-full rounded-md bg-red-500 py-1.5 font-medium text-blue-50 hover:bg-red-600" onClick={() => vaciarCarrito()}> Vaciar Carrito </button>
                        <Link to="/">
                            <button
                                className="mt-6 flex items-center justify-center w-full py-1.5 text-blue-500 border border-blue-500 rounded-md dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 hover:text-gray-100 dark:bg-blue-600 dark:hover:bg-blue-700 dark:hover:border-blue-700 dark:hover:text-gray-300">
                                Seguir Comprando
                            </button>
                        </Link>
                        </div>
                    </div>
                </div>
            </div >


            <div>

                <h3> Total:$ {total}  </h3>

            </div>
        </>
    )
}

export default Cart