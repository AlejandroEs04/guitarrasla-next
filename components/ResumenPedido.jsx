'use client'
import {useContext, useEffect, useState} from 'react'
import styles from '../styles/carrito.module.css'
import { CarritoContext } from '@/context/Carrito-Providert'

function ResumenPedido() {
    const [total, setTotal] = useState(0)

    const contexto = useContext(CarritoContext)
    const { carrito } = contexto

    useEffect(() => {
        if(carrito.length >= 1) {
            const calculoTotal = carrito.reduce((total, producto) => total + (producto.cantidad * producto.precio), 0)
            setTotal(calculoTotal)
        }
        
    },[carrito])

    return (
        <aside className={styles.resumen}>
            <h3>Resumen del pedido</h3>
            <p>Total a pagar: ${total} mxn</p>
        </aside>
    )
}

export default ResumenPedido
