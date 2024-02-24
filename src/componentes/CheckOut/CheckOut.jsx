import { useState, useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import { db } from '../../service/config'
import { collection, addDoc, updateDoc, getDoc, doc } from 'firebase/firestore'
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import copy from 'clipboard-copy';
import Notice from '../Notice/Notice';


const CheckOut = () => {

    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

    const [nombre, setNombre] = useState('J');
    const [telefono, setTelefono] = useState('1');
    const [correo, setCorreo] = useState('jarregui92@gmail.com');
    const [correoConfirmacion, setCorreoConfirmacion] = useState('jarregui92@gmail.com');
    const [direccion, setDireccion] = useState('2');
    const [ciudad, setCiudad] = useState('2');
    const [codigoPostal, setCodigoPostal] = useState('2');
    const [comentario, setComentario] = useState('2');
    const [ordenId, setOrdenId] = useState('');
    const [error, setError] = useState('');

    const notify = () => toast.success(`Gracias por su compra, tu numero de orden es el siguiente:   ${ordenId}, ---> Click para copiar a portapapeles!`, {
        position: "top-center",
        autoClose: false,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "light",
        onClick: () => {
            copy(ordenId)
                .then(() => {
                    toast.success("La orden se copió al portapapeles, en breves nos comunicaremos via Whatsapp", {
                        position: "top-center",
                        autoClose: 5000, // Tiempo en milisegundos
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: false,
                        progress: undefined,
                        theme: "light",
                    });
                })
                .catch(err => {
                    console.error('Error al copiar al portapapeles: ', err);
                });
        }
    });

    if (ordenId) notify()

    const manejadorSubmit = (e) => {
        e.preventDefault();

        if (!nombre || !telefono || !correo || !correoConfirmacion || !direccion || !ciudad || !codigoPostal) {
            setError('Todos los campos son obligatorios');
            return;
        }

        if (correo !== correoConfirmacion) {
            setError('Los correos no coinciden');
            return;
        }

        if (carrito.length === 0) {
            setError('El carrito está vacío');
            return;
        }

        const orden = {
            items: carrito.map(producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad,
            })),
            total,
            fecha: new Date(),
            nombre,
            telefono,
            correo,
            direccion,
            ciudad,
            codigoPostal,
            comentario
        };
        Promise.all(
            orden.items.map(async (productoOrden) => {
                const productoRef = doc(db, "productos", String(productoOrden.id));
                const productoDoc = await getDoc(productoRef);
                const stockActual = productoDoc.data().stock;

                await updateDoc(productoRef, { stock: stockActual - productoOrden.cantidad })
            })
        ).then(() => {
            addDoc(collection(db, 'ordenes'), orden)
                .then(docRef => {
                    setOrdenId(docRef.id);
                    vaciarCarrito();
                    setNombre('');
                    setTelefono('');
                    setCorreo('');
                    setCorreoConfirmacion('');
                    setDireccion('');
                    setCiudad('');
                    setCodigoPostal('');
                    setComentario('');
                })
                .catch(error => {
                    console.log("Error al crear la orden de compra ", error);
                    setError('Error al crear la orden de compra');
                })
        }).catch(error => {
            console.log("Error al actualizar el stock de los productos ", error);
            setError('Error inesperado, comuníquese con servicio al cliente');
        })


    }

    return (
        <div>
            <ToastContainer position="top-center" autoClose={false} newestOnTop={false} closeOnClick={true} rtl={false} pauseOnFocusLoss={false} draggable={false} theme="light" />
            <div className="h-screen grid grid-cols-1">
                <div className="lg:col-span-2 bg-indigo-50 flex justify-center">
                    <div className="md:w-3/4 lg:w-2/4 space-y-8 px-12">

                        {cantidadTotal === 0 ?
                            <>
                                <Link to="/">
                                    {ordenId ? <Notice classColor='text-green-500' msg="Compra realizada con exito, Nos comunicaremos contigo via Whatsapp!" title="Exitoso!" /> : <Notice classColor='text-red-500' msg="No hay productos en el carrito!" title="Error!" />}
                                    <button className="submit-button px-4 py-3 rounded-full bg-pink-400 text-white focus:ring focus:outline-none w-full text-xl font-semibold transition-colors">
                                        Ir a Tienda
                                    </button>
                                </Link>
                            </>
                            :
                            <>
                                <Notice classColor="text-yellow-500" title="Checkout" msg="Complete sus detalles de envío y pago a continuación." />
                                <form onSubmit={manejadorSubmit}>
                                    <div className="rounded-md">
                                        <section>
                                            <h2 className="uppercase tracking-wide text-lg font-semibold text-gray-700 my-2">Información de envío y facturación.</h2>
                                            <fieldset className="mb-3 bg-white shadow-lg rounded text-gray-600">
                                                <label htmlFor="nombre" className="flex border-b border-gray-200 h-12 py-3 items-center">
                                                    <span className="text-right px-2">Nombre</span>
                                                    <input name="nombre" className="focus:outline-none px-3 flex-grow" placeholder="Try Odinsson" required="" type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                                                </label>
                                                <label htmlFor="telefono" className="flex border-b border-gray-200 h-12 py-3 items-center">
                                                    <span className="text-right px-2">Telefono</span>
                                                    <input name="telefono" type="text" className="focus:outline-none px-3 flex-grow" placeholder="+598 99 999 999" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                                                </label>
                                                <label htmlFor="correo" className="flex border-b border-gray-200 h-12 py-3 items-center">
                                                    <span className="text-right px-2">Correo</span>
                                                    <input name="correo" type="email" className="focus:outline-none px-3 flex-grow" placeholder="ejemplo@ejemplo.com.uy" value={correo} onChange={(e) => setCorreo(e.target.value)} />
                                                </label>
                                                <label htmlFor="correoConfirmacion" className="flex border-b border-gray-200 h-12 py-3 items-center">
                                                    <span className="text-right px-2">Confirmar Correo</span>
                                                    <input name="correoConfirmacion" type="email" className="focus:outline-none px-3 flex-grow" placeholder="ejemplo@ejemplo.com.uy" value={correoConfirmacion} onChange={(e) => setCorreoConfirmacion(e.target.value)} />
                                                </label>
                                                <label htmlFor="direccion" className="flex border-b border-gray-200 h-12 py-3 items-center">
                                                    <span className="text-right px-2">Direccion Envio</span>
                                                    <input name="direccion" type="text" className="focus:outline-none px-3 flex-grow" placeholder="Calle 19 apto 999" value={direccion} onChange={(e) => setDireccion(e.target.value)} />
                                                </label>
                                                <label htmlFor="ciudad" className="flex border-b border-gray-200 h-12 py-3 items-center">
                                                    <span className="text-right px-2">Ciudad</span>
                                                    <input type="text" name="ciudad" className="focus:outline-none px-3 flex-grow" placeholder="Mercedes" value={ciudad} onChange={(e) => setCiudad(e.target.value)} />
                                                </label>
                                                <label htmlFor="codigoPostal" className="flex border-b border-gray-200 h-12 py-3 items-center">
                                                    <span className="text-right px-2">Cod. Postal</span>
                                                    <input type="text" name="codigoPostal" className="focus:outline-none px-3 flex-grow" placeholder="75000" value={codigoPostal} onChange={(e) => setCodigoPostal(e.target.value)} />
                                                </label>
                                                <label htmlFor="comentario" className="flex border-b border-gray-200 h-12 py-3 items-center">
                                                    <span className="text-right px-2">Comentario</span>
                                                    <input type="text" name="comentario" className="focus:outline-none px-3 flex-grow" placeholder="Informacion adicional para agregar al pedido..." value={comentario} onChange={(e) => setComentario(e.target.value)} />
                                                </label>
                                            </fieldset>
                                            {
                                                error && <p className='font-bold' style={{ color: "red" }}>{error}</p>
                                            }
                                        </section>
                                    </div>


                                    <button type="submit" className=" px-4 py-3 mt-4 rounded-full bg-pink-400 text-white focus:ring focus:outline-none w-full text-xl font-semibold transition-colors">
                                        <div className="flex flex-col">
                                            <span>Total: USD ${total}</span>
                                            <span className="font-semibold">( {cantidadTotal > 1 ? cantidadTotal + ' Stickers' : cantidadTotal + ' Sticker'} )</span>
                                        </div>
                                    </button>
                                </form>
                            </>
                        }

                    </div>
                </div>
            </div>
        </div >
    )
}

export default CheckOut