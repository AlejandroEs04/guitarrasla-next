'use client'
import { CarritoContext } from "@/context/Carrito-Providert"
import { useContext } from "react"
import Image from "next/image"
import styles from '../styles/carrito.module.css'
import CantidadSelect from "./CantidadSelect"


export default function ListadoCarrito() {
    const contexto = useContext(CarritoContext)

    const { carrito, actualizarCantidad, eliminarProducto } = contexto

    if(carrito.length === 0) {
        return (
            <p>Carrito Vacio</p>
        )
    } else {
        return carrito.map(producto => (
            <div key={producto.id} className={styles.producto}>
                <div>
                    <Image width={250} height={480} src={producto.imagen} alt={`imagen producto ${producto.nombre}`} />
                </div>
                <div>
                    <p className={styles.nombre}>{producto.nombre}</p>

                    <div className={styles.cantidad}>
                        <p>Cantidad: </p>
                        <select 
                            className={styles.select}
                            onChange={e => actualizarCantidad({
                                id: producto.id,
                                cantidad: e.target.value
                            })}
                            value={producto.cantidad}
                        >
                            <option value='1'> 1 </option>
                            <option value='2'> 2 </option>
                            <option value='3'> 3 </option>
                            <option value='4'> 4 </option>
                            <option value='5'> 5 </option>
                        </select>
                    </div>

                    <p className={styles.precio}>$<span>{producto.precio}</span></p>
                    <p className={styles.subtotal}>Subtotal: $<span>{producto.cantidad * producto.precio}</span></p>
                </div>
                <button
                    className={styles.eliminar}
                    type="button"
                    onClick={() => eliminarProducto(producto.id)}
                >
                    x
                </button>
            </div>
        ))
    }
}
