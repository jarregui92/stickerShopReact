import { ShoppingCartIcon } from '@heroicons/react/24/solid'

const CartWidget = () => {
  return (
    <div className='flex pr-4'>
      <div className=''>
        <ShoppingCartIcon className="w-7 h-7 " />
      </div>
      <p className='text-lg '>
        $0.00 <span className='text-sm' >(0)</span>
      </p>
    </div>

  )
}

export default CartWidget