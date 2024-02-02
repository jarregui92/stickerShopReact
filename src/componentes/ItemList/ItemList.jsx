import Item from "../Item/Item";
//import './ItemList.css';

const ItemList = ({ productos }) => {
  return (
    <div className="container xl:max-w-screen-xl mx-auto py-12 px-6">
      <div className="grid gap-8 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {productos.map(prod => <Item key={prod.id}  {...prod} />)}
      </div>
    </div>
  )
}

export default ItemList