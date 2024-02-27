import React from 'react'
import Rating from '../Rating/Rating'

const CartItemTracking = ({ item}) => {
    return (
            <li className="grid grid-cols-6 gap-2 border-b-1">
                <div className="col-span-1 self-center">
                    <img src={item.img} alt={item.nombre} className="rounded w-full" />
                </div>
                <div className="flex flex-col col-span-3 pt-2">
                    <span className="text-gray-600 text-md font-semi-bold">{item.nombre}</span>
                    <span className="text-gray-400 text-sm inline-block pt-2"><Rating rate={item.rate} /></span>
                </div>
                <div className="col-span-2 pt-3">
                    <div className="flex items-center space-x-2 text-sm justify-between">
                        <span className="text-gray-400">{item.cantidad} x {item.unitPrice}</span>
                        <span className="text-pink-400 font-semibold inline-block">USD {(item.unitPrice * item.cantidad)}</span>
                    </div>
                </div>
            </li>
    )
}

export default CartItemTracking