import { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import './ItemDetail.css';

import { CarritoContext } from '../../context/CarritoContext';
import { useContext } from 'react';
import Rating from '../Rating/Rating';

const ItemDetail = ({ id, nombre, stock, precio, img, rate, moneda }) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const { agregarAlCarrito } = useContext(CarritoContext);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);

    const item = { id, nombre, precio, img, moneda, rate, stock };
    agregarAlCarrito(item, cantidad);
  }

  return (
    <>
      <section className="overflow-hidden bg-white py-11 font-poppins dark:bg-gray-800">
        <div className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4 md:w-1/2 ">
              <div className="sticky top-0 overflow-hidden ">
                <div className="relative mb-6 lg:mb-10 lg:h-2/4 ">
                  <img src={img} alt="" className=" w-full lg:h-full " />
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 ">
              <div className="lg:pl-20">
                <div className="mb-8 ">
                  <span className="text-lg font-medium text-rose-500 dark:text-rose-200">Nuevo</span>
                  <h2 className="max-w-xl mt-2 mb-6 text-2xl font-bold dark:text-gray-400 md:text-4xl">
                    {nombre}</h2>
                  <div className="flex items-center mb-6">
                    <Rating rate={rate} />
                  </div>
                  <p className="max-w-md mb-8 text-gray-700 dark:text-gray-400">
                    Este innovador sticker, generado con inteligencia artificial, cuenta con diseños únicos y creativos que se adaptan a cualquier ocasión. Con colores vibrantes y detalles precisos, este producto añadirá un toque especial a tu estilo y proyectos de decoración.
                  </p>
                  <p className="inline-block mb-8 text-4xl font-bold text-gray-700 dark:text-gray-400 ">
                    <span>{moneda}</span> <span>${precio}</span>
                  </p>
                  {stock > 0 ? <p className="text-green-600 dark:text-green-300 ">En stock {stock}</p> : <p className="text-red-600 dark:text-red-300 line-through text-lg font-semibold">Sin stock</p>}
                </div>

                <div className="w-full mb-8 ">
                  <div className="w-full mb-8">



                    {agregarCantidad > 0 ? (
                      <Link to="/cart">
                        <p className="text-md mb-2 font-bold text-white">Agregado al carrito</p>
                      <button
                        className="flex items-center justify-center w-full p-4 text-blue-500 border border-blue-500 rounded-md dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 hover:text-gray-100 dark:bg-blue-600 dark:hover:bg-blue-700 dark:hover:border-blue-700 dark:hover:text-gray-300">
                        Terminar compra
                      </button>
                      </Link>
                    ) : (
                      stock == 0 ? (
                       <>
                        <p className="text-md mb-2 font-bold">No hay stock disponible</p>
                        <Link to="/">
                        <button
                          className="flex items-center justify-center w-full p-4 text-blue-500 border border-blue-500 rounded-md dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 hover:text-gray-100 dark:bg-blue-600 dark:hover:bg-blue-700 dark:hover:border-blue-700 dark:hover:text-gray-300">
                          Seguir Comprando
                        </button>
                        </Link>
                        </>
                      ) : (
                        <ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />
                      )
                    )}
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default ItemDetail