
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import CheckOut from './componentes/CheckOut/CheckOut';
import Orders from './componentes/Orders/Orders';
import Cart from './componentes/Cart/Cart';

import Login from './paginas/Login/Login';
import Register from './paginas/Register/Register';



import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { CarritoProvider } from './context/CarritoContext';
import { AuthProvider } from './context/AuthContext';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <CarritoProvider>
          <AuthProvider>
            <NavBar />
            <Routes>
              <Route path='/' element={<ItemListContainer />} />
              <Route path='/categoria/:idCategoria' element={<ItemListContainer />} />
              <Route path='/item/:idItem' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/checkout' element={<CheckOut />} />
              <Route path='/orders' element={<Orders />} />
              <Route path='*' element={<Navigate to="/" replace />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
            </Routes>
          </AuthProvider>
        </CarritoProvider>
      </BrowserRouter>
    </>
  )
}

export default App