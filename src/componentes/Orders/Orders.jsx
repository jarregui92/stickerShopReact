import { useState } from 'react'
import { db } from '../../service/config'
import { getDoc, doc } from 'firebase/firestore'
import 'react-toastify/dist/ReactToastify.css';
import Notice from '../Notice/Notice';
import CartItemTracking from '../CartItemTracking/CartItemTracking';


const Orders = () => {

    const [nroOrden, setNroOrden] = useState('');
    const [compra, setCompra] = useState(0);
    const [orden, setOrden] = useState(0);
    const [error, setError] = useState('');

    const manejadorSubmit = (e) => {
        e.preventDefault();
        if (!nroOrden) {
            setError('Debes de ingersar un numero de cuenta');
            return;
        }

        const nuevoDoc = doc(db, 'ordenes', nroOrden);

        getDoc(nuevoDoc)
            .then(res => {
                const data = res.data();
                const nuevaOrden = { id: res.id, ...data }
                setOrden(nuevaOrden);
                if (!nuevaOrden.nombre) {
                    setError('No se encontró la orden');
                    return;
                }
                setCompra(true);
            })
            .catch(error => console.log(error))

        setError('');
    }

    return (
        <div>
            {compra === 0 ?
                <>
                    <div className="h-screen grid grid-cols-1">
                        <div className="lg:col-span-2 bg-indigo-50 flex justify-center">
                            <div className="md:w-3/4 lg:w-2/4 space-y-8 px-12">
                                <Notice classColor="text-green-500" title="Checkout" msg="Ingresa el codigo de rastreo de tu compra." />
                                <form onSubmit={manejadorSubmit}>
                                    <div className="rounded-md">
                                        <section>
                                            <fieldset className="mb-3 bg-white shadow-lg rounded text-gray-600">
                                                <label htmlFor="compra" className="flex border-b border-gray-200 h-12 py-3 items-center">
                                                    <span className="text-right px-2">Nº Compra: </span>
                                                    <input name="compra" className="focus:outline-none px-3 flex-grow" placeholder="Ingresar el codigo..." required="" type="text" onChange={(e) => setNroOrden(e.target.value)} />
                                                </label>

                                            </fieldset>
                                            {
                                                error && <p className='font-bold' style={{ color: "red" }}>{error}</p>
                                            }
                                        </section>
                                    </div>


                                    <button type="submit" className=" px-4 py-3 mt-4 rounded-full bg-pink-400 text-white focus:ring focus:outline-none w-full text-xl font-semibold transition-colors">
                                        <div className="flex flex-col">
                                            <span>Buscar</span>
                                        </div>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </>
                :
                <>

                    <div className="h-screen grid grid-cols-4">
                        <div className="lg:col-span-3 col-span-4 bg-indigo-50 space-y-8 px-12">
                            <Notice classColor="text-green-500" title="Exitoso -" msg="Encontramos tu orden." />
                            <div className="rounded-md">
                                <form >
                                    <section>
                                        <h2 className="uppercase tracking-wide text-lg font-semibold text-gray-700 my-2">INFORMACIÓN DE ENVÍO Y FACTURACIÓN</h2>
                                        <fieldset className="mb-3 bg-white shadow-lg rounded text-gray-600">
                                            <label htmlFor="nombre" className="flex border-b border-gray-200 h-12 py-3 items-center">
                                                <span className="text-right px-2">Nombre</span>
                                                <p name="nombre" className="focus:outline-none px-3 flex-grow" placeholder="Try Odinsson" required="" type="text"> {orden.nombre} </p>
                                            </label>
                                            <label htmlFor="telefono" className="flex border-b border-gray-200 h-12 py-3 items-center">
                                                <span className="text-right px-2">Teléfono</span>
                                                <p name="telefono" className="focus:outline-none px-3 flex-grow" placeholder="+598 99 999 999"> {orden.telefono} </p>
                                            </label>
                                            <label htmlFor="correo" className="flex border-b border-gray-200 h-12 py-3 items-center">
                                                <span className="text-right px-2">Correo</span>
                                                <p name="correo" type="email" className="focus:outline-none px-3 flex-grow" placeholder="ejemplo@ejemplo.com.uy"> {orden.correo} </p>
                                            </label>
                                            <label htmlFor="direccion" className="flex border-b border-gray-200 h-12 py-3 items-center">
                                                <span className="text-right px-2">Dirección Envío</span>
                                                <p name="direccion" className="focus:outline-none px-3 flex-grow" placeholder="Calle 19 apto 999"> {orden.direccion} </p>
                                            </label>
                                            <label htmlFor="ciudad" className="flex border-b border-gray-200 h-12 py-3 items-center">
                                                <span className="text-right px-2">Ciudad</span>
                                                <p name="ciudad" className="focus:outline-none px-3 flex-grow" placeholder="Mercedes"> {orden.ciudad}  </p>
                                            </label>
                                            <label htmlFor="codigoPostal" className="flex border-b border-gray-200 h-12 py-3 items-center">
                                                <span className="text-right px-2">Cod. Postal</span>
                                                <p name="codigoPostal" className="focus:outline-none px-3 flex-grow" placeholder="75000"> {orden.codigoPostal} </p>
                                            </label>
                                            <label htmlFor="comentario" className="flex border-b border-gray-200 h-12 py-3 items-center">
                                                <span className="text-right px-2">Comentario</span>
                                                <p name="comentario" className="focus:outline-none px-3 flex-grow" placeholder="Informacion adicional para agregar al pedido..."> {orden.comentario} </p>
                                            </label>
                                        </fieldset>
                                    </section>
                                </form>
                            </div>
                            <div className="rounded-md">
                                <h2 className="uppercase tracking-wide text-lg font-semibold text-gray-700">ESTADO DEL PEDIDO</h2>
                                <Notice classColor="text-yellow-500" title="En Proceso -" msg="Tu pedido esta en proceso de envio." />
                            </div>
                            <button onClick={() => setCompra(0)} className="submit-button px-4 py-3 rounded-full bg-pink-400 text-white focus:ring focus:outline-none w-full text-xl font-semibold transition-colors">
                                Buscar otro pedido
                            </button>
                        </div>
                        <div className="col-span-1 bg-white lg:block hidden">
                            <h1 className="py-6 border-b-2 text-xl text-gray-600 px-8">Resumen de Pedido</h1>
                            <ul className="py-6 border-b space-y-6 px-8">
                                            
                                {orden && orden.items.map(item =><CartItemTracking key={item.id} item={item}/>)}

                            </ul>
                            <div className="px-8 border-b">
                                <div className="flex justify-between py-4 text-gray-600">
                                    <span>Subtotal</span>
                                    <span className="font-semibold text-pink-500">USD {orden.total}</span>
                                </div>
                                <div className="flex justify-between py-4 text-gray-600">
                                    <span>Costos de Envio</span>
                                    <span className="font-semibold text-pink-500">USD {orden.costoEnvio}</span>
                                </div>
                            </div>
                            <div className="font-semibold text-xl px-8 flex justify-between py-8 text-gray-600">
                                <span>Total</span>
                                <span className="font-semibold text-pink-500">USD {(orden.total + orden.costoEnvio) }</span>
                            </div>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default Orders