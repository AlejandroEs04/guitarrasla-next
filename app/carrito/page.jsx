import ListadoCarrito from '@/components/ListadoCarrito'
import styles from '../../styles/carrito.module.css'
import ResumenPedido from '@/components/ResumenPedido'

export default function CarritoPage() {
  return (
    <main className="contenedor">
        <h1 className="heading">Carrito</h1>

        <div className={styles.contenido}>
            <div className={styles.carrito}>
                <h2>Articulos</h2>
                <ListadoCarrito />
            </div>

            <ResumenPedido />
        </div>
    </main>
  )
}