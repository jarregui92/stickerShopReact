import React from 'react'

const CartItem = ({item, cantidad}) => {
  return (
    <div>
        <h3> {item.nombre}  </h3>
        <p> Cantidad: {cantidad} </p>
        <p> Precio: {item.precio} </p>
    </div>
  )
}

export default CartItem