import { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import './ItemDetail.css';

//Importamos el CarritoContext: 
import { CarritoContext } from '../../context/CarritoContext';
//Importo el Hook useContext: 
import { useContext } from 'react';

const ItemDetail = ({ id, nombre, stock, precio, img }) => {
  //Creamos  un estado local con la cantidad de productos agregados. 
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  ////clase 11 - Context

  const {agregarAlCarrito} = useContext(CarritoContext);


  ///////////////////////////////////////////////////////////
  //Creamos una función manejadora de la cantidad

  const manejadorCantidad =  (cantidad) => {
    setAgregarCantidad(cantidad);
    //console.log("Productos agregados: " + cantidad);

    //Ahora voy a crear un objeto con el item y la cantidad
    const item = {id, nombre, precio};
    agregarAlCarrito(item, cantidad);
  }

  return (
    <div className='contenedorItem'>
      <h2>Nombre: {nombre} </h2>
      <h3>Precio: {precio} </h3>
      <p>ID: {id} </p>
      <p>Stock: {stock} </p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto ea eum in consequatur nesciunt dolores nam, fugiat eligendi ipsa esse quod voluptatem accusamus facere natus! Numquam expedita ut repellendus inventore!</p>
      <img src={img} alt={nombre} />

      {
        /// Acá empleamos la lógica de montaje y desmontaje del contador
      }

      {
        agregarCantidad > 0 ? (<Link to="/cart"> Terminar compra</Link>) : (<ItemCount incial = {1} stock = {stock} funcionAgregar = {manejadorCantidad} />)
      }


    </div>
  )
}

export default ItemDetail