import { Link } from 'react-router-dom';
import Rating from '../Rating/Rating';

const Item = ({ id, nombre, precio, img, rate, moneda, stock }) => {
  return (
    
    <div className='border-2 rounded-md group overflow-hidden bg-gray-100'>
      <div className=" items-center flex  justify-center bg-gray-400">
        <img src={img} alt={nombre} />
      </div>
      <div className="p-6" >
        <p className="font-semibold text-lg" >{nombre}</p>
        <Rating rate={rate} />
          <div className='mt-4 '>
            <p className='font-semibold'>Stock:  <span className="text-green-500" >{stock}</span></p>
          </div>
        <div className="flex flex-row items-center justify-between space-x-2">
          <div>
          <p className='font-semibold'>Precio:  <span className="text-green-500" >{moneda}  {precio}</span></p>
          </div>
          <Link to={`/item/${id}`}>
            <button className="border rounded-lg py-1 px-4 hover:bg-green-500 hover:text-white">
              Detalles
            </button>
          </Link>
        </div>
      </div>


    </div>


  )
}

export default Item