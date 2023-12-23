import './App.css'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {

  return (
    <>
      <NavBar />
      <div>
        <ItemListContainer greeting={"Bienvenidos a Sticker Shop!"}/>
      </div>
    </>
  )
}

export default App
