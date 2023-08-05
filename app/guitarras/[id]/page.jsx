import Image from 'next/image'
import styles from '../../../styles/guitarras.module.css'

const fetchGuitarra = (ruta) => {
    return fetch(`http://127.0.0.1:1337/api/guitarras?filters[url]=${ruta}&populate=imagen`, {
        next: {
            revalidate: 30
        }
    })
        .then(res => res.json())
}

export default async function GuitarraPage({params}) {
    const { id } = params
    const {data: guitarra} = await fetchGuitarra(id)
    const { descripcion, nombre, precio, imagen } = guitarra[0].attributes

    return (
        <div className={styles.guitarra}>
            <Image src={imagen ? imagen.data.attributes.formats.medium.url : ''} alt={`Imagen Guitarra ${nombre}`} width={600} height={400}/>
            <div className={styles.contenido}>
                <h3>{nombre}</h3>
                <p className={styles.descripcion}>{descripcion}</p>
                <p className={styles.precio}>${precio}</p>

                <form>
                    <label htmlFor='cantidad'>Cantidad: </label>
                    <select id="cantidad">
                        <option value='0'> -- SELECCIONE -- </option>
                        <option value='1'> 1 </option>
                        <option value='2'> 2 </option>
                        <option value='3'> 3 </option>
                        <option value='4'> 4 </option>
                        <option value='5'> 5 </option>
                    </select>
                </form>
            </div>
        </div>
    )
}
