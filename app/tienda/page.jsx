import styles from '../../styles/grid.module.css'
import ListadoGuitarras from '@/components/ListadoGuitarras'


function ShopPage() {
  return (
    <main className="contenedor">
    <h1 className="heading">Nuestra Coleccion</h1>

    <div className={styles.grid}>
        <ListadoGuitarras />
    </div>
        
    </main>
  )
}

export default ShopPage
