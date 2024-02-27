import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import { CarritoContext } from '../../context/CarritoContext'
import { useContext } from 'react'

const CartWidget = () => {

  const {cantidadTotal, total } = useContext(CarritoContext)
  return (
    <div className='flex pr-4'>
      <div className=''>
        <ShoppingCartIcon className="w-7 h-7 " />
      </div>
      {cantidadTotal > 0  && <p className='text-lg '> ${total} <span className='text-sm' >({cantidadTotal})</span></p> }
    </div>

  )
}

export default CartWidget