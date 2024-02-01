import './Item.css';
import { Link } from 'react-router-dom';
import Rating from '../Rating/Rating';

const Item = ({id, nombre, precio, img, rate, moneda}) => {
  return (
    <>
            <div className="relative w-full h-64">
              <img src={img} alt={nombre} sizes="100%"
                  style={{
                      //ACOMODAR ESTO PARA QUE SE VEAN MEJOR LAS IMAGENES
                      objectFit: 'contain',
                  }}
              />
            </div>
            <div className="p-6" >
            <p className="font-semibold text-lg" >{nombre}</p>
            <Rating rate={rate}/>
            <div className="mt-4 flex items-center justify-between space-x-2">
                <div>
                    <p className="text-gray-500" >Price</p>
                    <p className="text-lg font-semibold" ><span >{moneda}</span>{precio}</p>
                </div>
                <Link to={`/item/${id}`}>
                  <button className="border rounded-lg py-1 px-4 hover:bg-green-500 hover:text-white">
                      Detalles
                  </button>
                </Link>
            </div>
        </div>
    </>
    
    
  )
}

export default Item