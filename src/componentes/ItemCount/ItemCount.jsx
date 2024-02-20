import { useState } from "react";
import { Link } from 'react-router-dom';

const ItemCount = ({ inicial, stock, funcionAgregar }) => {

  const [contador, setContador] = useState(1);


  const incrementar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  }

  const decrementar = () => {
    if (contador > inicial) {
      setContador(contador - 1);
    }
  }


  return (
    <>
      <div className="w-32 mb-8 ">
        <label htmlFor=""
          className="w-full text-xl font-semibold text-gray-700 dark:text-gray-400">Cantidad</label>
        <div className="relative flex flex-row w-full h-10 mt-4 bg-transparent rounded-lg">
          <button onClick={decrementar}
            className="w-20 h-full text-gray-600 bg-gray-300 rounded-l outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 hover:text-gray-700 dark:bg-gray-900 hover:bg-gray-400">
            <span className="m-auto text-2xl font-thin">-</span>
          </button>
          <p type="number"
            className="flex items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-300 outline-none dark:text-gray-400 dark:placeholder-gray-400 dark:bg-gray-900 focus:outline-none text-md hover:text-black"
          >{contador}</p>
          <button onClick={incrementar}
            className="w-20 h-full text-gray-600 bg-gray-300 rounded-r outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 dark:bg-gray-900 hover:text-gray-700 hover:bg-gray-400">
            <span className="m-auto text-2xl font-thin">+</span>
          </button>
        </div>
      </div>
      <div className="flex flex-wrap items-center -mx-4 ">
        <div className="w-full px-4 mb-4 lg:w-1/2 lg:mb-0">
          <button onClick={() => funcionAgregar(contador)}
            className="flex items-center justify-center w-full p-4 text-blue-500 border border-blue-500 rounded-md dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 hover:text-gray-100 dark:bg-blue-600 dark:hover:bg-blue-700 dark:hover:border-blue-700 dark:hover:text-gray-300">
            Añadir al carrito
          </button>
        </div>
        <div className="w-full px-4 mb-4 lg:mb-0 lg:w-1/2">
          <Link to="/">
            <button
              className="flex items-center justify-center w-full p-4 text-blue-500 border border-blue-500 rounded-md dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 hover:text-gray-100 dark:bg-blue-600 dark:hover:bg-blue-700 dark:hover:border-blue-700 dark:hover:text-gray-300">
              Seguir Comprando
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default ItemCount