import React from 'react'
import {TrashIcon} from "@heroicons/react/24/outline"
import Rating from '../Rating/Rating'
import { CarritoContext } from "../../context/CarritoContext";
import { useContext } from "react";


const CartItem = ({ item, cantidad }) => {
  const { eliminarProducto}  = useContext(CarritoContext);
  return (
    <div>
      < div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md flex">
        <img src={item.img} alt={item.nombre} className="rounded-lg w-20" />
        <div className="ml-4 flex w-full justify-between">
          <div className="mt-5 sm:mt-0">
            <h2 className="text-lg font-bold text-gray-900">{item.nombre}</h2>
            <p className="mt-1 text-xs text-gray-700"></p>
            <p className="text-sm">{item.moneda} {item.precio}</p>

          <Rating rate={item.rate} /> 
            <p className="text-sm">Cantidad: {cantidad}</p>
          </div>
          <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
            <div className="flex items-center border-gray-100">
              <TrashIcon  className="w-6 h-6 hidden sm:block flex-shrink-0 text-gray-400 hover:text-red-400 cursor-pointer" onClick={() => eliminarProducto(item.id)}/>
            </div>
            <div className="flex items-center sm:hidden space-x-4">
              <TrashIcon  className="w-6 h-6 flex-shrink-0 text-gray-400 hover:text-red-400 cursor-pointer" onClick={() => eliminarProducto(item.id)}/>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default CartItem