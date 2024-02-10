import { Link } from 'react-router-dom';
import Rating from '../Rating/Rating';

const Item = ({ id, nombre, precio, img, rate, moneda }) => {
  return (
    
    <div className='border-2 rounded-md group overflow-hidden bg-gray-100'>
      <div className=" items-center flex  justify-center bg-gray-400">
        <img src={img} alt={nombre} />
      </div>
      <div className="p-6" >
        <p className="font-semibold text-lg" >{nombre}</p>
        <Rating rate={rate} />
        <div className="mt-4 flex items-center justify-between space-x-2">
          <div>
            <p className="text-gray-500" >Price</p>
            <p className="text-lg font-semibold" ><span >{moneda}</span> {precio}</p>
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