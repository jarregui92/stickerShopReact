const productos = [
    { id: '1', nombre: "Spacial Cat", precio: '2.00', moneda: "USD", img: "https://image.lexica.art/full_jpg/3878f953-ae01-4ab5-a0ff-65a39d212dc8",rate: 1, idcat: "premium", stock:"0"},
    { id: '2', nombre: "Spacial Cat v2", precio: '2.00', moneda: "USD", img: "https://image.lexica.art/full_jpg/9d81c714-3620-4955-8171-373a96e24917",rate: 4, idcat: "premium", stock:"3"},
    { id: '3', nombre: "Spacial Cat v3", precio: '2.00', moneda: "USD", img: "https://image.lexica.art/full_jpg/86ae7884-fc17-4e67-818e-8513e1464f1c",rate: 3, idcat: "premium", stock:"1"},
    { id: '4', nombre: "Cat", precio: '0.00', moneda: "USD", img: "https://image.lexica.art/full_jpg/55c9393a-dff1-4088-b7e1-9a725a0b4335",rate: 3, idcat: "free", stock:"1"},
    { id: '5', nombre: "Cute Cat", precio: '2.00', moneda: "USD", img: "https://image.lexica.art/full_jpg/13ba1f43-63da-456e-9aab-c0eda446bc3c",rate: 5, idcat: "premium", stock:"1"},
    { id: '6', nombre: "My Cat", precio: '0.00', moneda: "USD", img: "https://image.lexica.art/full_jpg/07a2d1ac-16bb-4b56-b07a-04d7a98340f6",rate: 4, idcat: "free", stock:"1"},
    { id: '7', nombre: "Cat", precio: '2.00', moneda: "USD", img: "https://image.lexica.art/full_jpg/fe9b9228-ff17-4b41-ae54-c614845f1d1a",rate: 4, idcat: "premium", stock:"1"},
    { id: '8', nombre: "Witch", precio: '2.00', moneda: "USD", img: "https://image.lexica.art/full_jpg/2a70df6d-162e-4261-9223-7f4e2c9a6202",rate: 4, idcat: "premium", stock:"1"},
    { id: '9', nombre: "Witch v2", precio: '2.00', moneda: "USD", img: "https://image.lexica.art/full_jpg/8a33416f-cd8b-4f1b-974e-6909b585b64c",rate: 4, idcat: "premium", stock:"1"},
    { id: '10', nombre: "Spacial Cat", precio: '2.00', moneda: "USD", img: "https://image.lexica.art/full_jpg/3819dadd-ee0c-4ca6-9478-6cb34f28c8e6",rate: 4, idcat: "premium", stock:"1"},
    { id: '11', nombre: "Cat", precio: '2.00', moneda: "USD", img: "https://image.lexica.art/full_jpg/9306dc0e-c8c5-401e-9618-fb4f466df093",rate: 4, idcat: "premium", stock:"1"},
    { id: '12', nombre: "Cat", precio: '2.00', moneda: "USD", img: "https://image.lexica.art/full_jpg/c5fb4a26-7f7e-4d99-abff-5f7f851a0e89",rate: 4, idcat: "premium", stock:"1"},
    { id: '13', nombre: "Bird", precio: '2.00', moneda: "USD", img: "https://image.lexica.art/full_jpg/f7abfd27-8b22-44d4-a581-11ce096eebcc",rate: 4, idcat: "premium", stock:"1"},
    { id: '14', nombre: "Bird", precio: '2.00', moneda: "USD", img: "https://image.lexica.art/full_jpg/c3c3e973-bf51-4674-973d-adbfcd1848c7",rate: 4, idcat: "premium", stock:"1"},
    { id: '15', nombre: "Bird Parrot", precio: '2.00', moneda: "USD", img: "https://image.lexica.art/full_jpg/4a5fe582-39ca-4d67-aec6-9ae2d79455bb",rate: 4, idcat: "premium", stock:"1"},
    { id: '16', nombre: "Bird", precio: '2.00', moneda: "USD", img: "https://image.lexica.art/full_jpg/c46ed71e-2c76-452b-84ba-cfe24d82c8fc",rate: 4, idcat: "premium", stock:"1"},
    { id: '17', nombre: "Alien", precio: '0.00', moneda: "USD", img: "https://image.lexica.art/full_jpg/a053d451-2612-492a-ad33-1dfce687c0c7",rate: 4, idcat: "free", stock:"1"},
    { id: '18', nombre: "Alien", precio: '2.00', moneda: "USD", img: "https://image.lexica.art/full_jpg/0d6f7429-56aa-4349-99ce-0b561791f129",rate: 5, idcat: "premium", stock:"1"},
    { id: '19', nombre: "Alien", precio: '2.00', moneda: "USD", img: "https://image.lexica.art/full_jpg/fb50dd66-1b29-484a-94ad-590f5875621d",rate: 4, idcat: "premium", stock:"1"},
    { id: '20', nombre: "Bird", precio: '2.00', moneda: "USD", img: "https://image.lexica.art/full_jpg/0fe129dc-010e-4f9e-b4b8-dbb3a0e017bf",rate: 4, idcat: "premium", stock:"1"},
    { id: '21', nombre: "Pikachu", precio: '2.00', moneda: "USD", img: "https://image.lexica.art/full_jpg/5c512d9f-37a6-4e09-a334-02ef417637b4",rate: 4, idcat: "premium", stock:"1"},
    { id: '22', nombre: "Cat", precio: '2.00', moneda: "USD", img: "https://image.lexica.art/full_jpg/b56dba00-e434-4ea5-9161-7b6cd08ebd13",rate: 3, idcat: "premium", stock:"1"},
    { id: '23', nombre: "Cat", precio: '2.00', moneda: "USD", img: "https://image.lexica.art/full_jpg/9e6e57c0-2ede-4660-b2c5-969ed3175179",rate: 4, idcat: "premium", stock:"1"},
    { id: '24', nombre: "Bird", precio: '2.00', moneda: "USD", img: "https://image.lexica.art/full_jpg/c487fc3d-fed4-4704-a58c-f459f9d7a373",rate: 5, idcat: "premium", stock:"1"},
    { id: '25', nombre: "Pikachu", precio: '2.00', moneda: "USD", img: "https://image.lexica.art/full_jpg/97ac1181-6188-4f75-b891-a776fc48e91a",rate: 4, idcat: "premium", stock:"1"},
    { id: '26', nombre: "Cat", precio: '2.00', moneda: "USD", img: "https://image.lexica.art/full_jpg/a58c6385-4ea4-4e4f-bddc-86d5a8a0163b",rate: 5, idcat: "premium", stock:"1"},
    { id: '27', nombre: "Cat", precio: '2.00', moneda: "USD", img: "https://image.lexica.art/full_jpg/eefb0ab6-bfc0-48cb-b16b-143c8e325ffa",rate: 3, idcat: "premium", stock:"1"},
    { id: '28', nombre: "Coffe Cat", precio: '0.00', moneda: "USD", img: "https://image.lexica.art/full_jpg/f0641ea9-871a-40ed-8179-c329a50eb843",rate: 4, idcat: "free", stock:"1"},
    { id: '29', nombre: "Cat Drink", precio: '2.00', moneda: "USD", img: "https://image.lexica.art/full_jpg/0539fba1-79dc-4d95-8eff-a871cc41c4a7",rate: 5, idcat: "premium", stock:"1"},
    { id: '30', nombre: "Skull", precio: '2.00', moneda: "USD", img: "https://image.lexica.art/full_jpg/829a6fdb-ee34-448e-9f94-b2265e78be8d",rate: 5, idcat: "premium", stock:"1"},
    { id: '31', nombre: "Skull Cool", precio: '2.00', moneda: "USD", img: "https://image.lexica.art/full_jpg/b18657d5-31aa-417f-bbed-15852eae5b9e",rate: 5, idcat: "premium", stock:"1"},
    { id: '32', nombre: "Skull", precio: '2.00', moneda: "USD", img: "https://image.lexica.art/full_jpg/1c2aa28a-d0bd-4628-b9bb-f82c840c79e9",rate: 4, idcat: "premium", stock:"1"},
    { id: '33', nombre: "Frog", precio: '0.00', moneda: "USD", img: "https://image.lexica.art/full_jpg/0b9eb876-9487-45f8-819d-8263fb722ab1",rate: 3, idcat: "free", stock:"1"},
    { id: '34', nombre: "Skull", precio: '2.00', moneda: "USD", img: "https://image.lexica.art/full_jpg/69160558-9ba8-44d1-9730-67bff44423fa",rate: 3, idcat: "premium", stock:"1"},
    { id: '35', nombre: "Skull", precio: '2.00', moneda: "USD", img: "https://image.lexica.art/full_jpg/3f956eff-7c49-4088-977f-573486c32cc1",rate: 4, idcat: "premium", stock:"1"},
    { id: '36', nombre: "Skull", precio: '2.00', moneda: "USD", img: "https://image.lexica.art/full_jpg/515352c2-3723-4569-93c1-bba006744657",rate: 5, idcat: "premium", stock:"1"},
    { id: '37', nombre: "Pack Pokemon", precio: '2.00', moneda: "USD", img: "https://image.lexica.art/full_jpg/31eb51ac-2a6a-49c6-a47b-a7d6f4069251",rate: 2, idcat: "premium", stock:"1"},
    { id: '38', nombre: "Fox", precio: '2.00', moneda: "USD", img: "https://image.lexica.art/full_jpg/74a5067f-911f-4ee4-8ef6-b48e1e1e7b32",rate: 5, idcat: "premium", stock:"1"},
    { id: '39', nombre: "Cat", precio: '2.00', moneda: "USD", img: "https://image.lexica.art/full_jpg/ec221e6e-44a8-4519-9491-7c5e943611de",rate: 3, idcat: "premium", stock:"1"},
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 100)
    })
}

//Funcion similar pero que ahora me retorne un solo item: 

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 100)
    })
}

//Creamos una función que retorne toda la categoria. 

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idcat === idCategoria);

            resolve(productosCategoria);
        }, 100)
    })
}   