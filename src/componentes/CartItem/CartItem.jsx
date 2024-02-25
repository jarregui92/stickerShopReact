import React from 'react'
import {TrashIcon} from "@heroicons/react/24/outline"
import Rating from '../Rating/Rating'
import { CarritoContext } from "../../context/CarritoContext";
import { useContext } from "react";


const CartItem = ({ item, cantidad }) => {
  const { eliminarProducto } = useContext(CarritoContext);
  return (
    <div>
      < div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
        <img src={item.img} alt={item.nombre} className="rounded-lg sm:w-20" />
        <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
          <div className="mt-5 sm:mt-0">
            <h2 className="text-lg font-bold text-gray-900">{item.nombre}</h2>
            <p className="mt-1 text-xs text-gray-700">{item.moneda}{item.precio}</p>
          <Rating rate={item.rate} /> 
          </div>
          <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
            <div className="flex items-center border-gray-100">
              <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50" > - </span>
              <p className="h-8 w-8 border  bg-white text-center text-black pt-1 outline-none" type="number"  min="1" max={item.stock} >{cantidad}</p>
              <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50" > + </span>
            </div>
            <div className="flex items-center space-x-4">
              <p className="text-sm">{item.moneda} {item.precio}</p>
              <TrashIcon  className="w-6 h-6 flex-shrink-0 text-gray-400 hover:text-red-400 cursor-pointer" onClick={() => eliminarProducto(item.id)}/>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default CartItem