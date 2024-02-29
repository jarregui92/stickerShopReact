import { useState, useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import { db } from '../../service/config'
import { collection, addDoc, updateDoc, getDoc, doc } from 'firebase/firestore'
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import copy from 'clipboard-copy';
import Notice from '../Notice/Notice';
import CartItem from "../CartItem/CartItem";

const CheckOut = () => {

    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

    const [costoEnvio, setCostoEnvio] = useState(5)
    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('');
    const [correo, setCorreo] = useState('');
    const [correoConfirmacion, setCorreoConfirmacion] = useState('');
    const [direccion, setDireccion] = useState('');
    const [ciudad, setCiudad] = useState('');
    const [codigoPostal, setCodigoPostal] = useState('');
    const [comentario, setComentario] = useState('');
    const [ordenId, setOrdenId] = useState('');
    const [error, setError] = useState('');

    const notify = () => toast.success(`Gracias por su compra, tu numero de orden es el siguiente:   ${ordenId},       Click para copiar a portapapeles!`, {
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
                img: producto.item.img,
                unitPrice: producto.item.precio,
            })),
            total: total,
            fecha: new Date(),
            nombre,
            telefono,
            correo,
            direccion,
            ciudad,
            codigoPostal,
            comentario,
            costoEnvio
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
            {cantidadTotal === 0 ?
                <>
                    <div className="h-screen grid grid-cols-1">
                        <div className="lg:col-span-2 bg-indigo-50 flex justify-center">
                            <div className="md:w-3/4 lg:w-2/4 space-y-8 px-12">
                                <Link to="/">
                                    {ordenId ? <Notice classColor='text-green-500' msg="Compra realizada con exito, Nos comunicaremos contigo via Whatsapp!" title="Exitoso!" /> : <Notice classColor='text-red-500' msg="No hay productos en el carrito!" title="Error!" />}
                                    <button className="submit-button px-4 py-3 rounded-full bg-pink-400 text-white focus:ring focus:outline-none w-full text-xl font-semibold transition-colors">
                                        Ir a Tienda
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </>
                :
                <>
                    <div className="h-screen grid grid-cols-4">
                        <div className="lg:col-span-3 col-span-4 bg-indigo-50 space-y-8 px-12">
                            <Notice classColor="text-yellow-500" title="Check-Out" msg="Información de envío y facturación." />
                            <div className="rounded-md">
                                <form onSubmit={manejadorSubmit}>
                                    <section>
                                        <fieldset className="mb-3 bg-white shadow-lg rounded text-gray-600">
                                            <label htmlFor="nombre" className="flex border-b border-gray-200 h-12 py-3 items-center">
                                                <span className="text-right px-2">Nombre</span>
                                                <input name="nombre" className="focus:outline-none px-3 flex-grow" placeholder="Julian Arregui" required="" type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                                            </label>
                                            <label htmlFor="telefono" className="flex border-b border-gray-200 h-12 py-3 items-center">
                                                <span className="text-right px-2">Teléfono</span>
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
                                                <span className="text-right px-2">Dirección Envío</span>
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
                                    <button type="submit" className=" px-4 py-3 mt-4 rounded-full bg-pink-400 text-white focus:ring focus:outline-none w-full text-xl font-semibold transition-colors">
                                        <div className="flex flex-col">
                                            <span>Finalizar Compra</span>
                                            <span className="font-semibold">( {cantidadTotal > 1 ? cantidadTotal + ' Stickers' : cantidadTotal + ' Sticker'} )</span>
                                        </div>
                                    </button>
                                </form>
                            </div>


                        </div >
                        <div className="col-span-1 bg-white lg:block hidden">
                            <h1 className="py-6 border-b-2 text-xl text-gray-600 px-8">Resumen de Pedido</h1>
                            <ul className="py-6 border-b space-y-6 px-8">
                                {carrito.map((prod, index) => <CartItem key={index} {...prod} />)}
                            </ul>
                            <div className="px-8 border-b">
                                <div className="flex justify-between py-4 text-gray-600">
                                    <span>Subtotal</span>
                                    <span className="font-semibold text-pink-500">USD {total}</span>
                                </div>
                                <div className="flex justify-between py-4 text-gray-600">
                                    <span>Costos de Envio</span>
                                    <span className="font-semibold text-pink-500">USD {costoEnvio}</span>
                                </div>
                            </div>
                            <div className="font-semibold text-xl px-8 flex justify-between py-8 text-gray-600">
                                <span>Total</span>
                                <span className="font-semibold text-pink-500">USD {(total + costoEnvio) }</span>
                            </div>
                        </div>
                    </div >
                </>
            }
        </div >



    )
}

export default CheckOut