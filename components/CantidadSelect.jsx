'use client'
import { useContext, useState } from 'react'
import styles from '../styles/guitarras.module.css'
import CarritoProvider, { CarritoContext } from '@/context/Carrito-Providert'

function CantidadSelect({id, imagen, nombre, precio}) {
    const [cantidad, setCantidad] = useState(0)

    const contexto = useContext(CarritoContext)

    const { agregarCarrito } = contexto

    const handleSubmit = e => {
        e.preventDefault()

        if(cantidad < 1) {
            alert('Cantidad No Valida')
            return
        }

        // Contruir un objeto 
        const guitarraSeleccionada = {
            id: id,
            imagen: imagen,
            nombre: nombre,
            precio: precio,
            cantidad: cantidad,
        }

        // Guardando la informacion al context
        agregarCarrito(guitarraSeleccionada)
    }

    return (
        <form 
            className={styles.formulario}
            onSubmit={handleSubmit}
        >
            <label htmlFor='cantidad'>Cantidad: </label>
            <select 
                onChange={e => setCantidad(+e.target.value)}
                id="cantidad"
            >
                <option value='0'> -- SELECCIONE -- </option>
                <option value='1'> 1 </option>
                <option value='2'> 2 </option>
                <option value='3'> 3 </option>
                <option value='4'> 4 </option>
                <option value='5'> 5 </option>
            </select>

            <input 
                type='submit'
                value='Agregar al carrito'
            />
            </form>
    )
}

export default CantidadSelect
