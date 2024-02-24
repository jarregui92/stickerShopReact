import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import CheckOut from './componentes/CheckOut/CheckOut';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//Importamos el CarritoProvider: 
import { CarritoProvider } from './context/CarritoContext';
//envuelvan la aplicación con el CarritoProvider. 

import Cart from './componentes/Cart/Cart';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <CarritoProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={ <ItemListContainer /> } />
            <Route path='/categoria/:idCategoria' element={ <ItemListContainer /> } />
            <Route path='/item/:idItem' element={ <ItemDetailContainer /> } />
            <Route path='/cart' element = {<Cart/>} />
            <Route path='/checkout' element = {<CheckOut/>} />
          </Routes>
        </CarritoProvider>
      </BrowserRouter>
    </>
  )
}

export default App